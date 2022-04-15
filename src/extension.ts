import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { Decoration } from './utils/decoration'

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
  workspace.onDidChangeConfiguration(
    (event) => {
      const configuration = new Configuration()
      decoration.update(configuration)
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
