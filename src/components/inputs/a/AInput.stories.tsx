import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { AInput, AInputProps } from './AInput'

export default {
  title: 'AInput',
  component: AInput,
} as Meta

const Template: Story<AInputProps> = (args) => <AInput {...args} />

export const Default = Template.bind({})

export const Error = Template.bind({})

export const Disable = Template.bind({})
