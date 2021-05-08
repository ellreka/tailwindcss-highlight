# tailwindcss-highlight

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/image_01.png)

This extension highlights the utilities of TailwindCSS.

## Installation

This extension is still under development, so you will need to build and install it yourself.

```bash
yarn
yarn package
code --install-extension tailwindcss-highlight-1.0.0.vsix
```

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
    "regex": "\\b(|-)p(|t|b|r|l|x|y)-[^'\"\\s]+",
    "color": "black",
    "backgroundColor": "rgb(187, 196, 136)"
  },
  ...
}
```

## TODO

- [x] Highlight utilities.
- [ ] Highlight variants.
