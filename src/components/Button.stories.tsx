import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import './Button.css'

import { Button, ButtonProps } from '../index'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Colorful = Template.bind({})

Primary.args = {
  children: <p className="text-white heading2">สร้างใหม่</p>,
}

Secondary.args = {
  size: 'Secondary',
  color: '#191D3C',
  children: <p className="text-white heading2">+ เพิ่มชื่อ</p>,
}

Colorful.args = {
  color: '#FECAAE',
  children: (
    <p className="heading2" style={{ color: '#FF5F05' }}>
      + เพิ่มหัวข้อ 2.1.1.2
    </p>
  ),
}
