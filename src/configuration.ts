import {
  DecorationRenderOptions,
  workspace,
  WorkspaceConfiguration
} from 'vscode'
export interface Configs {
  enable: boolean
  options: DecorationRenderOptions
  regex: string
}

export interface MyConfiguration {
  configs: Record<string, Configs> | {}
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
    return this.configuration.get('languages', [])
  }

  get configs(): MyConfiguration['configs'] {
    return this.configuration.get('configs', {})
  }
}
