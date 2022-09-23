# Tailwind CSS Highlight

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/visual-image.png)

This extension highlights the utilities of TailwindCSS.

You can customize colors and regexes.

## Installation

<https://marketplace.visualstudio.com/items?itemName=ellreka.tailwindcss-highlight>

## Development

Please run debug mode on the vscode.

## Configuration

### `tailwindcss-highlight.languages`

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

### `tailwindcss-highlight.configs`

| Name    | Description                 | Type                                                                                                       |
| ------- | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| enable  | Whether to highlight        | `Boolean`                                                                                                  |
| regex   | Regular expression to match | `String`                                                                                                   |
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

#### Customization example

##### Make it a underline instead of a highlight

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
````

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/example-configs.png)

### `tailwindcss-highlight.variants`

| Name     | Description          | Type        |
| -------- | -------------------- | ----------- |
| enable   | Whether to highlight | `Boolean`   |
| variants | List of variant      | ` String[]` |
| color    | Font color code      | `String`    |

```json
"tailwindcss-highlight.configs": {
  "responsive": {
    "enable": true,
    "variants": [
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    "color": "#51FFFF"
  },
}
```

#### Customization example

##### Change the color of the focus variants

```json
"tailwindcss-highlight.configs": {
  "focus": {
    "enable": true,
    "variants": [
      "focus",
      "focus-within",
      "focus-visible"
    ],
    "color": "#FFB6C1"
  },
}
```
