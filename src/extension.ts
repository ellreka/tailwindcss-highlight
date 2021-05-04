import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { Decoration } from './utils/decoration'

export async function activate(context: ExtensionContext): Promise<void> {
  const editor = window.activeTextEditor
  if (editor == null) return
  const config = new Configuration()
  const decoration = new Decoration(editor, config)
  console.log(config)
  decoration.update()
  window.onDidChangeActiveTextEditor(
    (editor) => {
      if (editor != null) {
        const decoration = new Decoration(editor, config)
        decoration.update()
      }
    },
    null,
    context.subscriptions
  )
  workspace.onDidChangeTextDocument(
    (event) => {
      if (editor.document.version === event.document.version) {
        decoration.update()
      }
    },
    null,
    context.subscriptions
  )
}

// export function deactivate() {
//   const decoration = new Decoration(editor, config)
//   decoration.dispose()
// }
