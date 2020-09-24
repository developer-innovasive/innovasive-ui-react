import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Select, SelectProps } from './Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = (args) => <Select {...args} />

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
