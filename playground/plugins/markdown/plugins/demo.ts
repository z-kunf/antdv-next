import type { MarkdownItEnv } from '@mdit-vue/types'
import type { ChildNode } from 'domhandler'
import type MarkdownIt from 'markdown-it'
import render from 'dom-serializer'
import { parseDocument } from 'htmlparser2'
import pathe from 'pathe'

declare module '@mdit-vue/types' {
  interface MarkdownItEnv {
    id?: string
  }
}

function checkWrapper(content: string, wrapper = 'demo'): boolean {
  const REGEX_DEMO = new RegExp(`<${wrapper}.*?>(.*?)</${wrapper}>`, 'gis')
  const REGEX_DEMO1 = new RegExp(`<${wrapper}.*?/>`, 'gis')
  return REGEX_DEMO.test(content) || REGEX_DEMO1.test(content)
}

// 支持递归处理被包裹的组件
function resolverDemo(children: ChildNode[], id: string, root: string, wrapper = 'demo') {
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (child.type === 'tag' && child.name === wrapper) {
      // 这里是demo
      const src = child.attribs.src
      if (!src) {
        console.error('src is required')
        return
      }
      const dir = pathe.dirname(id)
      const filePath = pathe.resolve(dir, src)
      const relative = pathe.relative(root, filePath)
      child.attribs.src = relative.startsWith('/') ? relative : `/${relative}`
    }
    else if (child.type === 'tag' && child.children && child.children.length > 0) {
      // 递归处理子节点
      resolverDemo(child.children, id, root, wrapper)
    }
  }
}

function parserDemo(content: string, id: string, root: string, wrapper = 'demo') {
  const dom = parseDocument(content, {
    lowerCaseAttributeNames: false,
    lowerCaseTags: false,
    recognizeSelfClosing: true,
  })
  resolverDemo(dom.children, id, root, wrapper)
  return render(dom, {
    decodeEntities: false,
    selfClosingTags: true,
  })
}

export function demoPlugin(md: MarkdownIt, config: { root?: string } = {}) {
  // 处理数据结构的配置
  const render = md.renderer.render
  md.renderer.render = function (tokens, index, env: MarkdownItEnv) {
    for (const token of tokens) {
      if ((token.type === 'html_block' || token.type === 'html_inline' || token.type === 'inline') && checkWrapper(token.content)) {
        // token.content = parserDemo(token.content, env.id, config.root ?? process.cwd()) ?? token.content

        token.content = parserDemo(token.content, env.id!, config?.root ?? process.cwd()) ?? token.content
      }
    }
    return render.call(this, tokens, index, env)
  }
}
