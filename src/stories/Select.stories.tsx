import { Meta, Story } from '@storybook/react/types-6-0'
import { Field, Formik } from 'formik'
import React from 'react'

import { Select, SelectProps } from '../components/Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = args => <Select {...args} />

export const Error = Template.bind({})

Error.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  error: 'กรุณาเลือก',
  options: [
    { id: 'หนังสือภายใน', name: 'หนังสือภายใน' },
    { id: 'หนังสือรับเข้า', name: 'หนังสือรับเข้า' },
    { id: 'หนังสือชั้นความลับ', name: 'หนังสือชั้นความลับ' },
  ],
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  disabled: true,
  options: [
    { id: 'หนังสือภายใน', name: 'หนังสือภายใน' },
    { id: 'หนังสือรับเข้า', name: 'หนังสือรับเข้า' },
    { id: 'หนังสือชั้นความลับ', name: 'หนังสือชั้นความลับ' },
  ],
}

export const Default = () => {
  return (
    <Formik initialValues={{ book: 'หนังสือรับเข้า' }} onSubmit={() => {}}>
      <Field
        name="book"
        label="กรุณาเลือกประเภทหนังสือ"
        component={Select}
        options={[
          { id: 'หนังสือภายใน', name: 'หนังสือภายใน' },
          { id: 'หนังสือรับเข้า', name: 'หนังสือรับเข้า' },
          { id: 'หนังสือชั้นความลับ', name: 'หนังสือชั้นความลับ' },
        ]}
      />
    </Formik>
  )
}
