import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './configuration'
import { Decoration } from './decoration'

export async function activate(context: ExtensionContext): Promise<void> {
  const configuration = new Configuration()
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

export async function deactivate(): Promise<void> {
  const configuration = new Configuration()
  const decoration = new Decoration(configuration)
  decoration.dispose()
}
