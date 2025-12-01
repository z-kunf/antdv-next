import type { PluginOption } from 'vite'
import { createMarkdown, loadBaseMd } from '../markdown'
import { DemoCtx } from './context.ts'

export function demoPlugin(): PluginOption {
  const md = createMarkdown()({
    withPlugin: false,
    config(md) {
      loadBaseMd(md)
    },
  })
  const demoCtx = new DemoCtx()
  return {
    name: 'vite:demo',
    configResolved(config) {
      demoCtx.setup(config)
    },
    async buildStart() {
      await demoCtx.scan()
    },
  }
}
