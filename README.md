# Tailwind CSS Highlight

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/visual-image.png)

This extension highlights the utilities of TailwindCSS.

You can customize colors and regexes.

## Installation

<https://marketplace.visualstudio.com/items?itemName=ellreka.tailwindcss-highlight>

## Development

Please run debug mode on the vscode.

## Configuration

### Languages

List of languages to apply highlighting.

```json
"tailwindcss-highlight.languages": [
  "html",
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact",
  "vue",
  "php",
  "svelte"
]
```

### Configs

| Name    | Description                 | Type                                                                                                       |
| ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| enable  | Whether to highlight        | Boolean                                                                                                    |
| regex   | Regular expression to match | String                                                                                                     |
| options | Highlight styles            | [DecorationRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) |

```json
"tailwindcss-highlight.configs": {
  "padding": {
    "enable": true,
    "regex": "(?<=[:`'\"\\s])(|-)p(|t|b|r|l|x|y)-[^`'\"\\s]+",
    "options": {
      "color": "black",
      "backgroundColor": "rgba(187, 196, 136, 1)"
    }
  }
}
```

#### Example

```json
"tailwindcss-highlight.configs": {
  "padding": {
    "enable": true,
    "regex": "(?<=[:`'\"\\s])(|-)p(|t|b|r|l|x|y)-[^`'\"\\s]+",
    "options": {
      "backgroundColor": "",
      "borderWidth": "0 0 3px 0",
      "borderStyle": "solid",
      "borderColor": "rgba(187, 196, 136, 1)",
      "color": "currentColor"
    }
  },
}
```

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/example-configs.png)
