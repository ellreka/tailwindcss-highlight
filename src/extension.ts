import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { Decoration } from './utils/decoration'

export async function activate(context: ExtensionContext): Promise<void> {
  const configuration = new Configuration()
  console.log(configuration)
  const decoration = new Decoration(configuration)
  decoration.update()
  window.onDidChangeActiveTextEditor(
    (editor) => {
      decoration.update()
    },
    null,
    context.subscriptions
  )
  workspace.onDidChangeTextDocument(
    (event) => {
      decoration.update()
    },
    null,
    context.subscriptions
  )
}

// export function deactivate() {
//   const decoration = new Decoration(editor, config)
//   decoration.dispose()
// }
