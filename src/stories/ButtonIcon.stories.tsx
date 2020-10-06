import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ButtonIcon, ButttonIconProps } from '../components/ButtonIcon'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
} as Meta

const Template: Story<ButttonIconProps> = args => <ButtonIcon {...args} />

export const Primary = Template.bind({})
export const Disabled = Template.bind({})

Primary.args = {
  children: (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path
          d="M9.08266 11.0001L13.7954 6.37151C14.068 6.10382 14.068 5.6694 13.7954 5.40128L12.7003 4.32577C12.4278 4.05808 11.9855 4.05808 11.7125 4.32577L7.00016 8.95479L2.28741 4.3262C2.01485 4.05851 1.57254 4.05851 1.29954 4.3262L0.20491 5.40128C-0.0676523 5.66897 -0.0676523 6.10339 0.20491 6.37151L4.91766 11.0001L0.20491 15.6287C-0.0676523 15.8964 -0.0676523 16.3308 0.20491 16.5989L1.29997 17.6744C1.57254 17.9421 2.01485 17.9421 2.28785 17.6744L7.00016 13.0454L11.7129 17.674C11.9855 17.9417 12.4278 17.9417 12.7008 17.674L13.7958 16.5985C14.0684 16.3308 14.0684 15.8964 13.7958 15.6283L9.08266 11.0001Z"
          fill="#191D3C"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
}

Disabled.args = {
  disabled: true,
  children: (
    <svg className="fill-current" width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M9.08266 11.0001L13.7954 6.37151C14.068 6.10382 14.068 5.6694 13.7954 5.40128L12.7003 4.32577C12.4278 4.05808 11.9855 4.05808 11.7125 4.32577L7.00016 8.95479L2.28741 4.3262C2.01485 4.05851 1.57254 4.05851 1.29954 4.3262L0.20491 5.40128C-0.0676523 5.66897 -0.0676523 6.10339 0.20491 6.37151L4.91766 11.0001L0.20491 15.6287C-0.0676523 15.8964 -0.0676523 16.3308 0.20491 16.5989L1.29997 17.6744C1.57254 17.9421 2.01485 17.9421 2.28785 17.6744L7.00016 13.0454L11.7129 17.674C11.9855 17.9417 12.4278 17.9417 12.7008 17.674L13.7958 16.5985C14.0684 16.3308 14.0684 15.8964 13.7958 15.6283L9.08266 11.0001Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="14" height="22" />
        </clipPath>
      </defs>
    </svg>
  ),
}
