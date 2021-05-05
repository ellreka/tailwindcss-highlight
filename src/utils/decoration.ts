import {
  DecorationOptions,
  Range,
  TextEditor,
  TextEditorDecorationType,
  window
} from 'vscode'

import { MyConfiguration } from './configuration'

export class Decoration {
  editor: TextEditor
  timer: NodeJS.Timer | undefined
  decorators: Array<{ decorator: TextEditorDecorationType; regex: RegExp }>
  constructor(editor: TextEditor, config: MyConfiguration) {
    this.editor = editor
    this.timer = undefined
    this.decorators = Object.entries(config.styles).map((style) => {
      return {
        regex: style[1].regex,
        decorator: window.createTextEditorDecorationType({
          color: style[1].color,
          backgroundColor: style[1].backgroundColor
        })
      }
    })
  }

  private decorate(): void {
    const document = this.editor.document
    const text = document.getText()
    this.decorators.forEach((decorator) => {
      const classNameRegex = new RegExp(
        /\b(?<=(class|className)=("|'|{`)).*?(?="|'|`})\b/, // \b(?<=(class|className)=("|'|{`|{clsx\(["'`])).*?(?="|'|`})\b
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
      this.editor.setDecorations(decorator.decorator, chars)
    })
  }

  update(): void {
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.timer = setTimeout(() => this.decorate(), 500)
  }

  dispose(): void {
    this.decorators.forEach((decorator) => {
      decorator.decorator.dispose()
    })
  }
}
