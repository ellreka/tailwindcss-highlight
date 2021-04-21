import { ExtensionContext, Hover, languages } from 'vscode'

import { Configuration } from './utils/configuration'

export async function activate(context: ExtensionContext): Promise<void> {
  const config = new Configuration()
  console.log(config.languages)
  console.log(config.utilities)
  languages.registerHoverProvider('typescript', {
    provideHover(document, position, token) {
      return new Hover('I am a hover!')
    }
  })
}
