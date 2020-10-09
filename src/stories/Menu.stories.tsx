import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Menu } from '../components/Menu'

export default {
  title: 'Menu',
  component: Menu,
} as Meta

export const Default = () => (
  <div className="flex justify-center w-full h-screen">
    <Menu
      title="สร้าง"
      items={[
        { title: 'บุคคล', onClick: () => {} },
        { title: 'เอกสาร', onClick: () => {} },
        { title: 'รูปภาพ', onClick: () => {} },
      ]}
    />
  </div>
)
