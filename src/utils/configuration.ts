import { workspace, WorkspaceConfiguration } from 'vscode'

export type Utilities = 'padding' | 'margin' | 'border'

export interface UtilityConfiguration {
  backgroundColor?: string
  color?: string
  regex: RegExp
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
    this.configuration = workspace.getConfiguration('tailwindcss-highlight')
  }

  get languages(): MyConfiguration['languages'] {
    return this.configuration.get('languages', [])
  }

  get utilities(): MyConfiguration['utilities'] {
    return this.configuration.get('utilities', {
      padding: {
        regex: /(|-)p(|t|b|r|l|x|y)-.*?(?=(\s|"|'))/,
        color: 'black',
        backgroundColor: 'rgb(187, 196, 136)'
      },
      margin: {
        regex: /((|-)m(|t|b|r|l|x|y)-.*?(?=(\s|"|')))|((|-)space-.*?(x|y)-.*?(?=(\s|"|')))/,
        color: 'black',
        backgroundColor: 'rgb(173, 134, 91)'
      },
      border: {
        regex: /border/,
        color: 'black',
        backgroundColor: 'rgb(222, 195, 138)'
      }
    })
  }
}
