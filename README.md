# Tailwind CSS Highlight

![](https://raw.githubusercontent.com/ellreka/tailwindcss-highlight/main/assets/visual-image.png)

This extension highlights the utilities of TailwindCSS.

## Installation

<https://marketplace.visualstudio.com/items?itemName=ellreka.tailwindcss-highlight>

## Development

1. `yarn install`
2. `yarn dev`
3. Run debug mode on the vscode.

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

### `tailwindcss-highlight.classRegex`

Regex used to detect class attributes/functions that contain tailwind classes to be highlighted.

```json
"tailwindcss-highlight.classRegex": [
  "(?:\\b(?:class(?:Name)?|tw)\\s*=\\s*(?:(?:{([^>}]+)})|([\"'`][^\"'`]+[\"'`])))",
  "(?:(clsx|classnames))\\(([^)(]*(?:\\([^)(]*(?:\\([^)(]*(?:\\([^)(]*\\)[^)(]*)*\\)[^)(]*)*\\)[^)(]*)*)\\)"
]
```

### `tailwindcss-highlight.enabledUtilities`

List of utilities to highlight.

Utility name list: [src/defaultConfig.ts](https://github.com/ellreka/tailwindcss-highlight/blob/main/src/defaultConfig.ts)

```json
"tailwindcss-highlight.enabledUtilities": [
  "padding",
  "margin",
  "space",
  "width",
  "height",
  "flex",
  "grid",
  "position"
]
```

### `tailwindcss-highlight.customUtilitiesConfig`

Configuration for highlighting utilities.
Override [default config](https://github.com/ellreka/tailwindcss-highlight/blob/main/src/defaultConfig.ts).
Set only the properties you want to override.

| Name  | Description                                              | Type                                                                                                       |
| ----- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| regex | Regex to match the utility                               | `String`                                                                                                   |
| color | Color of the highlight. Style property takes precedence. | `String`                                                                                                   |
| style | Highlight styles                                         | [DecorationRenderOptions](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) |

#### Example: Make it a underline instead of a highlight

```json
"tailwindcss-highlight.customUtilitiesConfig": {
  "padding": {
    "style": {
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

### `tailwindcss-highlight.defaultVariantsColor`

Default color of the variants.

```json
"tailwindcss-highlight.defaultVariantsColor": "#1FAB89"
```

### `tailwindcss-highlight.customVariantsConfig`

Configuration for highlighting variants.

| Name  | Description     | Type       |
| ----- | --------------- | ---------- |
| Key   | Color           | `String`   |
| Value | List of variant | `String[]` |

```json
"tailwindcss-highlight.customVariantsConfig": {
  "#08D9D6": [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}
```

#### Example: Change the color of the focus variants

```json
"tailwindcss-highlight.customVariantsConfig": {
  "#FFB6C1": [
    "focus",
    "focus-within",
    "focus-visible"
  ]
}
```
