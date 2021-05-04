import { workspace, WorkspaceConfiguration } from 'vscode'

export type Utilities = 'padding' | 'margin' | 'border' | 'space'
// | 'text'
// | 'font'
// | 'display'
// | 'width'
// | 'height'

export interface Styles {
  backgroundColor?: string
  color?: string
  regex: RegExp
}

export interface MyConfiguration {
  /**
   * Configure a list of languages that should be highlight.
   */
  languages: string[]
  styles: Record<Utilities, Styles>
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
    return this.configuration.get('utilities', ['padding', 'margin', 'border'])
  }

  get styles(): MyConfiguration['styles'] {
    return this.configuration.get('styles', {
      padding: {
        regex: /(?<=[\s'"])(|-)p(|t|b|r|l|x|y)-[^'"\s]+/,
        color: 'black',
        backgroundColor: 'rgb(187, 196, 136)'
      },
      margin: {
        regex: /(?<=[\s'"])(|-)m(|t|b|r|l|x|y)-[^'"\s]+/,
        color: 'black',
        backgroundColor: 'rgb(173, 134, 91)'
      },
      space: {
        regex: /(?<=[\s'"])(|-)space-(x|y)-[^'"\s]+/,
        color: 'black',
        backgroundColor: 'rgb(173, 134, 91)'
      },
      border: {
        regex: /(?<=[\s'"])border(|-)[^'"\s]+/,
        color: 'black',
        backgroundColor: 'rgb(222, 195, 138)'
      }
      // display: {
      //   regex: /(block|inline|inline-block|flex|inline-flex|table|hidden)(?=(\s|"|'))/,
      //   color: 'black',
      //   backgroundColor: 'rgb(222, 195, 138)'
      // }
    })
  }
}
