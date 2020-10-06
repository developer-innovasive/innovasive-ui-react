import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ButtonBase } from '../components/ButtonBase'
import { ButtonPrimary, ButtonPrimaryProps } from '../components/ButtonPrimary'
import { ButtonSecondary, ButtonSecondaryProps } from '../components/ButtonSecondary'

export default {
  title: 'Button',
  component: ButtonBase,
} as Meta

const PrimaryTemplate: Story<ButtonPrimaryProps> = args => <ButtonPrimary {...args} />
const TemplateSecondary: Story<ButtonSecondaryProps> = args => <ButtonSecondary {...args} />

export const Primary = PrimaryTemplate.bind({})

Primary.args = {
  title: 'สร้างใหม่',
}

export const Secondary = TemplateSecondary.bind({})

Secondary.args = {
  title: '+ เพิ่มชื่อ',
}
