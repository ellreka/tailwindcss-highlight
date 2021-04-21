import { workspace, WorkspaceConfiguration } from 'vscode'

export type Utilities = 'padding'

export interface UtilityConfiguration {
  color: string
  regex: string
}

export interface MyConfiguration {
  /**
   * Configure a list of languages that should be highlight.
   */
  languages: string[]
  utilities: Record<Utilities, UtilityConfiguration>
}

export class Configuration {
  configuration: WorkspaceConfiguration

  constructor() {
    this.configuration = workspace.getConfiguration('tailwind-highlight')
  }

  get languages(): MyConfiguration['languages'] {
    return this.configuration.get('languages') ?? []
  }

  get utilities(): MyConfiguration['utilities'] {
    return (
      this.configuration.get('utilities') ?? {
        padding: {
          regex: '',
          color: ''
        }
      }
    )
  }
}
