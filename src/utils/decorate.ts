import { Range, window } from 'vscode'

export function decorate(): void {
  const editor = window.activeTextEditor
  if (editor == null) return
  const document = editor.document
  const text = document.getText()
  const decorator = window.createTextEditorDecorationType({
    backgroundColor: 'red'
  })
  const regex = new RegExp('padding', 'g')
  const matches = text.matchAll(regex)
  const chars = []
  if (chars.length > 0) {
    decorator.dispose()
  }
  for (const match of matches) {
    if (match.index == null) return
    const start = editor.document.positionAt(match.index)
    const end = editor.document.positionAt(
      Number(match.index) + Number(match[0].length)
    )
    const range = new Range(start, end)
    chars.push(range)
  }
  editor.setDecorations(decorator, chars)
}
