import type { ResolvedConfig } from 'vite'
import { glob } from 'tinyglobby'
import { normalizePath } from 'vite'

export class DemoCtx {
  // 定义基础路径
  private cwd: string = process.cwd()
  // 定义扫描文件配置
  private pattern: string[] = [
    'src/pages/**/demo/*.vue',
  ]

  // 定义需要被忽略的路径规则
  private ignore: string[] = [
    '**/node_modules/**',
    '**/components/**',
    '**/tests/**',
    '**/__tests__/**',
    '**/__test__/**',
    '**/dist/**',
  ]

  public config: ResolvedConfig = {} as ResolvedConfig

  constructor() {
  }

  setup(config: ResolvedConfig) {
    this.config = config
    // 基础路径信息配置
    this.cwd = config?.root ?? process.cwd()
  }

  // 开始扫描文件配置
  public async scan() {
    const files = await glob(this.pattern, {
      ignore: this.ignore,
      cwd: this.cwd,
    })

    for (const file of files) {
      const _file = normalizePath(file.startsWith('/') ? file : `/${file}`)
    }
  }
}
