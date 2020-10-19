# Innovasive UI 🎨

Innovasive UI ถูกสร้างขึ้นเพื่อให้เกิดความรวดเร็วในการสร้างเว็บไซต์ด้วย React โดยไม่ต้องเสียเวลากับการขึ้น Component ใหม่ๆ

![npm version](https://img.shields.io/npm/v/innovasive-ui-react?style=for-the-badge)

## Requirement

`tailwindcss` ^v1.9.0

## Installation

```
yarn add innovasive-ui-react
```

Update `tailwind.config.js`

```js
module.exports = {
  presets: [require('innovasive-ui-react/src/tailwind.config')],
}
```

Add styles to your `main.css`

```css
@import 'innovasive-ui-react/src/styles/index.css';
```
