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
    this.decorators = Object.entries(config.utilities).map((utility) => {
      return {
        regex: utility[1].regex,
        decorator: window.createTextEditorDecorationType({
          color: utility[1].color,
          backgroundColor: utility[1].backgroundColor
        })
      }
    })
  }

  private decorate(): void {
    const document = this.editor.document
    const text = document.getText()
    this.decorators.forEach((decorator) => {
      const regex = new RegExp(decorator.regex, 'g')
      const matches = text.matchAll(regex)
      const chars: DecorationOptions[] = []
      for (const match of matches) {
        if (match.index == null) return
        const start = document.positionAt(match.index)
        const end = document.positionAt(match.index + match[0].length)
        const range = new Range(start, end)
        chars.push({ range })
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
}
