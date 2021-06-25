import {
  DecorationOptions,
  Range,
  TextEditor,
  TextEditorDecorationType,
  window
} from 'vscode'

import { MyConfiguration } from './configuration'
import { getClassNames, getUtility } from './utils'

export class Decoration {
  timer: NodeJS.Timer | undefined
  configuration: MyConfiguration
  decorators: Array<{ decorator: TextEditorDecorationType; regex: string }>
  constructor(configuration: MyConfiguration) {
    this.timer = undefined
    this.configuration = configuration
    this.decorators = Object.entries(configuration.configs)
      .filter((config) => config[1].enable)
      .map((config) => {
        return {
          regex: config[1].regex,
          decorator: window.createTextEditorDecorationType(config[1].options)
        }
      })
  }

  private decorate(editor: TextEditor): void {
    if (editor == null) return
    const document = editor.document
    const text = document.getText()
    const classNames = getClassNames(text)
    this.decorators.forEach((decorator) => {
      const regex = new RegExp(decorator.regex, 'g')
      const chars: DecorationOptions[] = []
      classNames.forEach((className) => {
        const utilities = getUtility(className.value, regex)
        utilities.forEach((utility) => {
          const start = document.positionAt(className.start + utility.start)
          const end = document.positionAt(className.start + utility.end)
          const range = new Range(start, end)
          chars.push({ range })
        })
        editor.setDecorations(decorator.decorator, chars)
      })
    })
  }

  update(): void {
    const editor = window.activeTextEditor
    if (editor == null) return
    const languageId = editor.document.languageId
    if (!this.configuration.languages.includes(languageId)) return
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = undefined
    }
    this.timer = setTimeout(() => {
      this.decorate(editor)
    }, 500)
  }

  dispose(): void {
    this.decorators.forEach((decorator) => {
      decorator.decorator.dispose()
    })
  }
}
