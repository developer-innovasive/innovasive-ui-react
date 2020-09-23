import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Input, InputProps } from './Input'

export default {
  title: 'Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})
