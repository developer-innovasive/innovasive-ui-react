# Innovasive UI 🎨

Innovasive UI ถูกสร้างขึ้นเพื่อให้เกิดความรวดเร็วในการสร้างเว็บไซต์ด้วย React โดยไม่ต้องเสียเวลากับการขึ้น Component ใหม่ๆ

## Installation

```
yarn add innovasive-ui-react
```

## Usage

Update `tailwind.config.js`

```js
const configs = require('innovasive-ui-react/src/innovasive-ui-tailwind.config')

module.exports = {
  purge: {},
  theme: {
    ...configs.theme,
    ///
    /// Override theme here...
    ///
  },
  ...configs.variants
}
```

Add this to your `main.css`

```css
@import 'innovasive-ui-react/src/styles/index.css';
```
