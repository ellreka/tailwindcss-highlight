import {
  DecorationRenderOptions,
  workspace,
  WorkspaceConfiguration
} from 'vscode'

export type Utilities = string
export interface Configs {
  options: DecorationRenderOptions
  regex: string
}

export interface MyConfiguration {
  configs: Record<Utilities, Configs> | {}
  /**
   * Configure a list of languages that should be highlight.
   */
  languages: string[]
  utilities: Utilities[]
}

export class Configuration {
  configuration: WorkspaceConfiguration

  constructor() {
    this.configuration = workspace.getConfiguration('tailwindcss-highlight')
  }

  get languages(): MyConfiguration['languages'] {
    return this.configuration.get('languages', [])
  }

  get utilities(): MyConfiguration['utilities'] {
    return this.configuration.get('utilities', [])
  }

  get configs(): MyConfiguration['configs'] {
    return this.configuration.get('configs', {})
  }
}
