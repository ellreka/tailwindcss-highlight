import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { Decoration } from './utils/decoration'

export async function activate(context: ExtensionContext): Promise<void> {
  const editor = window.activeTextEditor
  if (editor == null) return
  const configuration = new Configuration()
  console.log(configuration)
  const decoration = new Decoration(configuration)
  decoration.update(editor)
  window.onDidChangeActiveTextEditor(
    (editor) => {
      if (editor != null) {
        decoration.update(editor)
      }
    },
    null,
    context.subscriptions
  )
  workspace.onDidChangeTextDocument(
    (event) => {
      if (editor.document.version === event.document.version) {
        const editor = window.activeTextEditor
        if (editor == null) return
        decoration.update(editor)
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
