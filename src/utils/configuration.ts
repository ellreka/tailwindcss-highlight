import { workspace, WorkspaceConfiguration } from 'vscode'

export type Utilities = 'padding' | 'margin'
// | 'border' | 'space'
// | 'text'
// | 'font'
// | 'display'
// | 'width'
// | 'height'

export interface Configs {
  backgroundColor?: string
  color?: string
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

// space: {
//   regex: /(?<=[\s'"])(|-)space-(x|y)-[^'"\s]+/,
//   color: 'black',
//   backgroundColor: 'rgb(173, 134, 91)'
// },
// border: {
//   regex: /(?<=[\s'"])border(|-)[^'"\s]+/,
//   color: 'black',
//   backgroundColor: 'rgb(222, 195, 138)'
// }
// display: {
//   regex: /(block|inline|inline-block|flex|inline-flex|table|hidden)(?=(\s|"|'))/,
//   color: 'black',
//   backgroundColor: 'rgb(222, 195, 138)'
// }
