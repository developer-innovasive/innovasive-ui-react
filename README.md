# Innovasive UI 🎨

Innovasive UI ถูกสร้างขึ้นเพื่อให้เกิดความรวดเร็วในการสร้างเว็บไซต์ด้วย React โดยไม่ต้องเสียเวลากับการขึ้น Component ใหม่ๆ

## Installation

```
yarn add innovasive-ui-react
```

## Usage

```js
//--- tailwind.config.js ---//
const defaultConfigs = require('innovasive-ui-react/innovasive-ui-tailwind.config')

module.exports = {
  purge: {},
  theme: {
    extend: {
      ...defaultConfigs,
      ///
      /// Override your styles here.
      ///
  },
}
```

```css
```
