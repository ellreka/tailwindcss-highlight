import {
  DecorationRenderOptions,
  workspace,
  WorkspaceConfiguration
} from 'vscode'

type Configs = Record<string,{
  enable: boolean
  options: DecorationRenderOptions
  regex: string
}>

type VariantsConfig = Record<string,  {
  enable: boolean
  variants: string[]
  color: string
}
>
export interface MyConfiguration {
  configs: Configs
  /**
   * Configure a list of languages that should be highlight.
   */
  languages: string[]
}

export class Configuration {
  configuration: WorkspaceConfiguration

  constructor() {
    this.configuration = workspace.getConfiguration('tailwindcss-highlight')
  }

  get languages(): MyConfiguration['languages'] {
    return this.configuration.get('languages') ?? []
  }

  get configs(): MyConfiguration['configs'] {
    const variants = this.configuration.get<VariantsConfig>('variants') ?? {}
    const configs = this.configuration.get<Configs>('configs') ?? {}
    return {
      ...configs,
      ...Object.entries(variants).reduce((acc, [key, value]) => {
        acc[`variants:${key}`] = {
          enable: value.enable ?? true,
          options: {
            color: value.color,
          },
          regex: `(?<=[:\`\'\"\\s])(${value.variants.join('|')}):`
        }
        return acc
      }, {} as Configs)
    }
  }
}
