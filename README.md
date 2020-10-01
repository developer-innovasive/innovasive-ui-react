# Innovasive UI

Innovasive UI ถูกสร้างขึ้นเพื่อให้เกิดความรวดเร็วในการสร้างเว็บไซต์ด้วย React โดยไม่ต้องเสียเวลากับการขึ้น Component ใหม่ๆ

\*\*Innovasive UI นี้ ทำงานควบคู่กับ Tailwindcss

ท่านจำเป็นต้องทำการตั้งค่า tailwind.config.js ก่อน โดยกำหนดค่าพื้นฐานดังนี้

```js
module.exports = {
  purge: {},
  theme: {
    extend: {
      colors: {
        'innovasive-ui': {
          label: 'สีที่ท่านต้องการให้เป็นสี Title ของ Input ต่างๆ'
          placeholer: 'สีที่ท่านต้องการให้เป็นสีของ Placeholder และ Value ของ Input

          primary: '#0010F7',

          error: '#DA0000',
          'disabled-light': '#F8F8F8',
          'disabled-dark': '#E2E1E6',

          grey: '#898D9E',
          'grey-medium': '#E2E1E6',
          'grey-medium-light': '#F1F1F2',
          'grey-light': '#F8F8F8',
        },
      },
    },
  },
}
```

และกำหนด ​Typography ของ Project นั้นๆ ให้่กับ Innovasive-ui ด้วย (เช่น Typograhphy ถูกเก็บไว้ใน index.css )

```css
.label {
  .......;
}
.placeholder {
  .......;
}
```
