import { ExtensionContext, window, workspace } from 'vscode'

import { Configuration } from './utils/configuration'
import { decorate } from './utils/decorate'

export async function activate(context: ExtensionContext): Promise<void> {
  const config = new Configuration()
  console.log(config.languages)
  console.log(config.utilities)
  window.onDidChangeActiveTextEditor((editor) => {
    decorate()
  })
  workspace.onDidChangeTextDocument((event) => {
    decorate()
  })
  // decorate()
}
