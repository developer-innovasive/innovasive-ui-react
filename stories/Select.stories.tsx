import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Select, SelectProps } from '../src/index'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = args => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  value: 'หนังสือรับเข้า',
  options: [
    { id: 'หนังสือภายใน', value: 'หนังสือภายใน' },
    { id: 'หนังสือรับเข้า', value: 'หนังสือรับเข้า' },
    { id: 'หนังสือชั้นความลับ', value: 'หนังสือชั้นความลับ' },
  ],
}

export const Error = Template.bind({})

Error.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  error: 'กรุณาเลือก',
  options: [
    { id: 'หนังสือภายใน', value: 'หนังสือภายใน' },
    { id: 'หนังสือรับเข้า', value: 'หนังสือรับเข้า' },
    { id: 'หนังสือชั้นความลับ', value: 'หนังสือชั้นความลับ' },
  ],
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  error: 'กรุณาเลือก',
  disabled: true,
  options: [
    { id: 'หนังสือภายใน', value: 'หนังสือภายใน' },
    { id: 'หนังสือรับเข้า', value: 'หนังสือรับเข้า' },
    { id: 'หนังสือชั้นความลับ', value: 'หนังสือชั้นความลับ' },
  ],
}
