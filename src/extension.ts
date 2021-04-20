import { ExtensionContext, Hover, languages } from 'vscode'

export async function activate(context: ExtensionContext): Promise<void> {
  console.log(context)
  languages.registerHoverProvider('typescript', {
    provideHover(document, position, token) {
      return new Hover('I am a hover!')
    }
  })
}
