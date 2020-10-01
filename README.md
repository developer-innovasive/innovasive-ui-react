# Innovasive UI 🎨

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
          label: '',                  // สีของ Title ใน Input, Select
          border: '',                 // สีของ Border ใน Input, Select, DataTable
          placeholder: '',            // สีของ Placeholder และ Value
          error: '',                  // สีของ Error ต่างๆใน Innovasive-UI
          'disabled-bg': '',          // สีของพื้นหลังของเวลา Disable
          'disabled-border': '',      // สีของขอบเวลา Disable
          'options-hover': '',        // พื้นหลังของ Options ใน Select เวลา hover
          'options-selected': '',     // พื้นหลังของ Options ใน Select เวลาถูกเลือก
          'table-header-bg': '',      // สีพื้นหลังของ Header ใน Table
          'paginate-selected': '',    // สีพื้นหลังของหมายเลขหน้าที่ถูกเลือกใน Paginate
          'paginate-hover': '',       // สีพื้นหลังของหมายเลขหน้าที่ถูก Hover ใน Paginate
      },
    },
  },
}
```

และกำหนด ​Typography ของ Project นั้นๆ ให้่กับ Innovasive-ui ด้วย (เช่น Typograhphy ถูกเก็บไว้ใน index.css )

```css
.inno-label {
  ........;
}
.inno-placeholder {
  ........;
}
.inno-options-small {
  ........;
}
.inno-options-default {
  ........;
}
```
