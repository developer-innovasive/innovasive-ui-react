import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { ButtonBase } from '../components/ButtonBase'
import { ButtonGhost, ButtonGhostProps } from '../components/ButtonGhost'
import { ButtonIcon, ButttonIconProps } from '../components/ButtonIcon'
import { ButtonPrimary, ButtonPrimaryProps } from '../components/ButtonPrimary'
import { ButtonSecondary, ButtonSecondaryProps } from '../components/ButtonSecondary'

export default {
  title: 'Button',
  component: ButtonBase,
} as Meta

const PrimaryTemplate: Story<ButtonPrimaryProps> = args => <ButtonPrimary {...args} />
const TemplateSecondary: Story<ButtonSecondaryProps> = args => <ButtonSecondary {...args} />
const TemplateGhost: Story<ButtonGhostProps> = args => <ButtonGhost {...args} />

export const Primary = PrimaryTemplate.bind({})

Primary.args = {
  title: 'สร้างใหม่',
}

export const Loading = PrimaryTemplate.bind({})

Loading.args = {
  title: 'สร้างใหม่',
  loading: true,
}

export const Secondary = TemplateSecondary.bind({})

Secondary.args = {
  title: () => (
    <div className="flex items-center space-x-8">
      <div>
        <svg className="text-white fill-current" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.19643 3.69643H5.46429C5.37553 3.69643 5.30357 3.62447 5.30357 3.53571V0.803571C5.30357 0.359802 4.94377 0 4.5 0C4.05623 0 3.69643 0.359802 3.69643 0.803571V3.53571C3.69643 3.62447 3.62447 3.69643 3.53571 3.69643H0.803571C0.359802 3.69643 0 4.05623 0 4.5C0 4.94377 0.359802 5.30357 0.803571 5.30357H3.53571C3.62447 5.30357 3.69643 5.37553 3.69643 5.46429V8.19643C3.69643 8.6402 4.05623 9 4.5 9C4.94377 9 5.30357 8.6402 5.30357 8.19643V5.46429C5.30357 5.37553 5.37553 5.30357 5.46429 5.30357H8.19643C8.6402 5.30357 9 4.94377 9 4.5C9 4.05623 8.6402 3.69643 8.19643 3.69643Z" />
        </svg>
      </div>
      <p>เพิ่มชื่อ</p>
    </div>
  ),
}

export const SecondaryLoading = TemplateSecondary.bind({})

SecondaryLoading.args = {
  loading: true,
}

export const Ghost = TemplateGhost.bind({})

Ghost.args = {
  title: () => (
    <div className="flex items-center space-x-8">
      <div>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.19643 3.69643H5.46429C5.37553 3.69643 5.30357 3.62447 5.30357 3.53571V0.803571C5.30357 0.359802 4.94377 0 4.5 0C4.05623 0 3.69643 0.359802 3.69643 0.803571V3.53571C3.69643 3.62447 3.62447 3.69643 3.53571 3.69643H0.803571C0.359802 3.69643 0 4.05623 0 4.5C0 4.94377 0.359802 5.30357 0.803571 5.30357H3.53571C3.62447 5.30357 3.69643 5.37553 3.69643 5.46429V8.19643C3.69643 8.6402 4.05623 9 4.5 9C4.94377 9 5.30357 8.6402 5.30357 8.19643V5.46429C5.30357 5.37553 5.37553 5.30357 5.46429 5.30357H8.19643C8.6402 5.30357 9 4.94377 9 4.5C9 4.05623 8.6402 3.69643 8.19643 3.69643Z"
            fill="#191D3C"
          />
        </svg>
      </div>
      <p>เพิ่มหัวข้อ 2.2</p>
    </div>
  ),
}

export const GhostLoading = TemplateGhost.bind({})

GhostLoading.args = {
  loading: true,
}

const IconTemplate: Story<ButttonIconProps> = args => <ButtonIcon {...args} />
export const Icon = IconTemplate.bind({})
export const IconDisabled = IconTemplate.bind({})

Icon.args = {
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

IconDisabled.args = {
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
