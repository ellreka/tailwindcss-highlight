# tailwindcss-highlight

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/image_01.png)

This extension highlights the utilities of TailwindCSS.

You can customize colors and regexes.

## Installation

<https://marketplace.visualstudio.com/items?itemName=ellreka.tailwindcss-highlight>

## Development

Please run debug mode on the vscode.

## Configuration

### Languages

```json
"tailwindcss-highlight.languages": [
  "html",
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
]
```

### Utilities

```json
"tailwindcss-highlight.utilities": [
  "padding",
  "margin",
  "space"
]
```

### Configs

```json
"tailwindcss-highlight.configs": {
  "padding": {
    "regex": "(?<=[:`'\"\\s])(|-)p(|t|b|r|l|x|y)-[^`'\"\\s]+",
    "options": {
      "color": "black",
      "backgroundColor": "rgb(187, 196, 136)"
    }
  }
}
```
