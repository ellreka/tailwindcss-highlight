import {
  DecorationOptions,
  Range,
  TextEditor,
  TextEditorDecorationType,
  window
} from 'vscode'

import { MyConfiguration } from './configuration'

export class Decoration {
  timer: NodeJS.Timer | undefined
  configuration: MyConfiguration
  decorators: Array<{ decorator: TextEditorDecorationType; regex: string }>
  constructor(configuration: MyConfiguration) {
    this.timer = undefined
    this.configuration = configuration
    this.decorators = Object.entries(configuration.configs)
      .filter((config) => configuration.utilities.includes(config[0]))
      .map((config) => {
        return {
          regex: config[1].regex,
          decorator: window.createTextEditorDecorationType(config[1].options)
        }
      })
  }

  private decorate(editor: TextEditor): void {
    if (editor == null) return
    const document = editor.document
    const text = document.getText()
    this.decorators.forEach((decorator) => {
      const classNameRegex = new RegExp(
        /(?:\bclass(?:Name)?\s*=\s*(?:{([\w\d\s_\-:/${}()[\]"'`,]+)})|(["'`][\w\d\s_\-:/]+["'`]))|(?:\btw\s*(`[\w\d\s_\-:/]+`))/,
        'g'
      )
      const classNameMatches = text.matchAll(classNameRegex)
      const chars: DecorationOptions[] = []
      for (const classNameMatch of classNameMatches) {
        const stringRegex = new RegExp(
          /(?:["'`]([\w\d\s_\-:/${}()[\]"']+)["'`])/,
          'g'
        )
        const stringMatches = classNameMatch[0].matchAll(stringRegex)
        for (const stringMatch of stringMatches) {
          if (stringMatch == null) return
          const regex = new RegExp(decorator.regex, 'g')
          const matches = classNameMatch[0].matchAll(regex)
          for (const match of matches) {
            if (
              match.index == null ||
              classNameMatch.index == null ||
              stringMatch.index == null
            )
              return
            const start = document.positionAt(
              classNameMatch.index + match.index
            )
            const end = document.positionAt(
              classNameMatch.index + match.index + match[0].length
            )
            const range = new Range(start, end)
            chars.push({ range })
          }
        }
      }
      editor.setDecorations(decorator.decorator, chars)
    })
  }

  update(): void {
    const editor = window.activeTextEditor
    if (editor == null) return
    const languageId = editor.document.languageId
    if (!this.configuration.languages.includes(languageId)) return
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.timer = setTimeout(() => {
      this.decorate(editor)
    }, 500)
  }

  dispose(): void {
    this.decorators.forEach((decorator) => {
      decorator.decorator.dispose()
    })
  }
}
