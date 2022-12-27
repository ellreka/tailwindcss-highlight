import {
  DecorationRenderOptions,
  workspace,
  WorkspaceConfiguration
} from 'vscode'
import {
  defaultEnabledUtilities,
  defaultUtilitiesConfig
} from '../defaultConfig'

type UtilitiesConfig = Record<
  string,
  {
    style?: DecorationRenderOptions
    color?: string
    regex?: string
  }
>

type Configs = Record<
  string,
  {
    enable: boolean
    options: DecorationRenderOptions
    regex: string
  }
>

type VariantsConfig = Record<
  string,
  {
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
    const customUtilitiesConfig =
      this.configuration.get<UtilitiesConfig>('customUtilitiesConfig') ?? {}
    const enabledUtilities =
      this.configuration.get<string[]>('enabledUtilities') ??
      defaultEnabledUtilities
    const config = {
      ...customUtilitiesConfig,
      ...Object.entries(defaultUtilitiesConfig).reduce((acc, [key, value]) => {
        acc[key] = {
          regex: customUtilitiesConfig[key]?.regex ?? value.regex,
          color: customUtilitiesConfig[key]?.color ?? value.color,
          style: customUtilitiesConfig[key]?.style
        }
        return acc
      }, {} as UtilitiesConfig)
    }

    return {
      ...Object.entries(config).reduce((acc, [key, value]) => {
        acc[key] = {
          enable: true,
          regex: value.regex ?? '',
          options: enabledUtilities.includes(key)
            ? value.style ?? highlightStyle(value.color ?? '')
            : borderStyle(value.color ?? '')
        }
        return acc
      }, {} as Configs),
      ...Object.entries(variants).reduce((acc, [key, value]) => {
        acc[`variants:${key}`] = {
          enable: value.enable,
          options: {
            color: value.color
          },
          regex: `(?<=[:\`\'\"\\s])(${value.variants.join('|')}):`
        }
        return acc
      }, {} as Configs)
    }
  }
}

const borderStyle = (color: string) => ({
  backgroundColor: '',
  borderStyle: 'dashed',
  borderWidth: '0 0 1px 0',
  borderColor: color
})

const highlightStyle = (color: string) => ({
  color: '#333',
  borderRadius: '0.25rem',
  backgroundColor: color
})
