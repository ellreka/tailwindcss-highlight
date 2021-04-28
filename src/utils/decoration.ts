import {
  DecorationOptions,
  Range,
  TextEditor,
  TextEditorDecorationType,
  window
} from 'vscode'

export class Decoration {
  editor: TextEditor
  timer: NodeJS.Timer | undefined
  decorator: TextEditorDecorationType
  constructor(editor: TextEditor) {
    this.editor = editor
    this.timer = undefined
    this.decorator = window.createTextEditorDecorationType({
      backgroundColor: 'rgb(187, 196, 136)'
    })
  }

  private decorate(): void {
    const document = this.editor.document
    const text = document.getText()
    const regex = new RegExp(/padding/, 'g')
    const matches = text.matchAll(regex)
    const chars: DecorationOptions[] = []
    for (const match of matches) {
      if (match.index == null) return
      const start = document.positionAt(match.index)
      const end = document.positionAt(match.index + match[0].length)
      const range = new Range(start, end)
      chars.push({ range, hoverMessage: 'うんこ' })
    }
    this.editor.setDecorations(this.decorator, chars)
  }

  update(): void {
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.timer = setTimeout(() => this.decorate(), 500)
  }
}
