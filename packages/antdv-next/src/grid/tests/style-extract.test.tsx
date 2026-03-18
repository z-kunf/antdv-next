import { createCache, extractStyle, StyleProvider } from '@antdv-next/cssinjs'
import { describe, expect, it } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { Col } from '..'
import ConfigProvider from '../../config-provider'

async function extractGridStyle() {
  const cache = createCache()
  const app = createSSRApp({
    render: () =>
      h(ConfigProvider, { theme: { hashed: false, cssVar: { key: 'grid-test' } } }, {
        default: () =>
          h(StyleProvider, { cache, mock: 'server' }, {
            default: () => h(Col, { xxxl: 24 }),
          }),
      }),
  })

  await renderToString(app)

  return extractStyle(cache, { plain: true, types: 'style' })
}

describe('grid style extract', () => {
  it('keeps responsive breakpoint media queries as static values in cssVar mode', async () => {
    const styleText = await extractGridStyle()

    expect(styleText).toContain('@media (min-width: 1920px)')
    expect(styleText).not.toContain('@media (min-width: var(--ant-screen-xxxl-min))')
    expect(styleText).not.toContain('@media (min-width: var(--ant-screen-xxxl))')
  })
})
