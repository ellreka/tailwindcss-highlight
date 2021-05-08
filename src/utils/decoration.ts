import {
  DecorationOptions,
  Range,
  TextEditorDecorationType,
  window
} from 'vscode'

import { MyConfiguration } from './configuration'

export class Decoration {
  timer: NodeJS.Timer | undefined
  decorators: Array<{ decorator: TextEditorDecorationType; regex: string }>
  constructor(configuration: MyConfiguration) {
    this.timer = undefined
    this.decorators = Object.entries(configuration.configs)
      .filter((config) => configuration.utilities.includes(config[0]))
      .map((config) => {
        return {
          regex: config[1].regex,
          decorator: window.createTextEditorDecorationType({
            color: config[1].color,
            backgroundColor: config[1].backgroundColor
          })
        }
      })
  }

  private decorate(): void {
    const editor = window.activeTextEditor
    if (editor == null) return
    const document = editor.document
    const text = document.getText()
    this.decorators.forEach((decorator) => {
      const classNameRegex = new RegExp(
        // TODO: 正規表現が曖昧
        /\b(?<=(class|className)=("|'|{)).*?(?="|'|})\b/,
        'g'
      )
      const classNameMatches = text.matchAll(classNameRegex)
      const chars: DecorationOptions[] = []
      for (const classNameMatch of classNameMatches) {
        const regex = new RegExp(decorator.regex, 'g')
        const matches = classNameMatch[0].matchAll(regex)
        for (const match of matches) {
          if (match.index == null) return
          if (classNameMatch.index == null) return
          const start = document.positionAt(classNameMatch.index + match.index)
          const end = document.positionAt(
            classNameMatch.index + match.index + match[0].length
          )
          const range = new Range(start, end)
          chars.push({ range })
        }
      }
      editor.setDecorations(decorator.decorator, chars)
    })
  }

  update(): void {
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.timer = setTimeout(() => {
      this.decorate()
    }, 500)
  }

  dispose(): void {
    this.decorators.forEach((decorator) => {
      decorator.decorator.dispose()
    })
  }
}
