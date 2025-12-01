import type { PluginOption, ResolvedConfig } from 'vite'
import fs from 'node:fs/promises'
import pathe from 'pathe'
import { createFilter } from 'vite'
import { parse } from 'vue/compiler-sfc'
import { createMarkdown, loadBaseMd, loadShiki } from '../markdown'

export function demoPlugin(): PluginOption {
  const md = createMarkdown()({
    withPlugin: false,
    config(md) {
      loadBaseMd(md)
      loadShiki(md)
    },
  })
  const VIRTUAL_MODULE_ID = 'virtual:demos'
  const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`
  const DEMO_SUFFIX = 'demo=true'
  const DEMO_GLOB = ['/src/pages/**/demo/*.vue']
  const filter = createFilter(DEMO_GLOB)
  let config: ResolvedConfig
  return {
    name: 'vite:demo',
    enforce: 'pre',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    async resolveId(id, importer) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID
      }
      if (id.includes(DEMO_SUFFIX)) {
        const resolved = await this.resolve(id, importer, { skipSelf: true })
        if (resolved) {
          return `\0${resolved.id}`
        }
      }
    },
    async load(id) {
      const [, query] = id.split('?')
      const params = new URLSearchParams(query)
      if (params.get('vue') !== null && params.get('type') === 'docs') {
        return 'export default {}'
      }
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `import {reactive} from 'vue';
        const rawDemos = import.meta.glob(${JSON.stringify(DEMO_GLOB)},{
            query: {demo:'true'},
            eager: true,
            import: 'default'
        })
        const demos = import.meta.hot?.data.demos || reactive({})
        for (const key in rawDemos) {
            demos[key] = rawDemos[key]
        }
        if (import.meta.hot) {
            // 保存引用到 data 中，供下一次热更新使用
            import.meta.hot.data.demos = demos
            
            // 自我接受更新！
            // 当 demo 列表变化时，只需重新执行本模块更新 demos 对象即可
            // 不需要重新加载引用了本模块的组件 (Demo.vue)
            import.meta.hot.accept()
        }
        export default demos
        `
      }
      if (id.startsWith('\0') && id.includes(DEMO_SUFFIX)) {
        const virtualId = id.slice(1)
        const [filePath] = virtualId.split('?')
        const code = await fs.readFile(filePath, 'utf-8')

        const { descriptor } = parse(code, {
          filename: filePath,
          sourceMap: false,
        })
        const locales: Record<string, any> = {}
        // 提取docsBlock的部分
        const docsBlock = descriptor.customBlocks.filter(block => block.type === 'docs')

        await Promise.all(docsBlock?.map(async (block) => {
          // 获取标签的内容
          const lang = block.attrs.lang as string || 'zh-CN'
          const env: any = {}
          const content = block.content.trim()
          const html = await md.renderAsync(content, env)
          // 提取标题内容
          const title = env.formatters?.title ?? env?.title ?? ''
          locales[lang] = {
            html,
            title,
          }
        }))
        const sourceCode = code.replace(/<docs[^>]*>[\s\S]*?<\/docs>/g, '').trim()
        const sourceHtml = await md.renderAsync(`\`\`\`vue\n${sourceCode}\n\`\`\``)
        return {
          code: `import Component from '${filePath}';
export default { 
  component: Component,
  locales: ${JSON.stringify(locales)},
  source: ${JSON.stringify(sourceCode)},
  html: ${JSON.stringify(sourceHtml)}
}`,
          map: null,
        }
      }
    },
    handleHotUpdate({ file, server, modules }) {
      // 去掉全路径
      const root = config.root ?? process.cwd()
      let relativePath = pathe.relative(root, file)
      relativePath = relativePath.split(pathe.sep).join('/')
      relativePath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`
      if (filter(relativePath)) {
        const updates: any[] = [...modules]

        const virtualModuleId = `\0${file}?${DEMO_SUFFIX}`

        const mod = server.moduleGraph.getModuleById(virtualModuleId)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
          updates.push(mod)
        }

        const parentMod = server.moduleGraph.getModuleById(RESOLVED_VIRTUAL_MODULE_ID)

        if (parentMod) {
          server.moduleGraph.invalidateModule(parentMod)
          updates.push(parentMod)
        }
        return updates
      }
    },
  }
}
