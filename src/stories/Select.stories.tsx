import { Meta, Story } from '@storybook/react/types-6-0'
import { Field, Formik } from 'formik'
import React from 'react'

import { Select, SelectFormik, SelectProps } from '../components/Select'

export default {
  title: 'Select',
  component: Select,
} as Meta

const Template: Story<SelectProps> = args => <Select {...args} />

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'กรุณาเลือกประเภทหนังสือ',
  disabled: true,
  options: [
    { label: 'หนังสือภายใน', value: '1' },
    { label: 'หนังสือรับเข้า', value: '2' },
    { label: 'หนังสือชั้นความลับ', value: '3' },
  ],
}

export const Error = () => {
  return (
    <Select
      label="กรุณาเลือกประเภทหนังสือ"
      value=""
      error="กรุณาเลือก!"
      onChange={(val: any) => console.log(val)}
      options={[
        { label: 'หนังสือภายใน', value: '1' },
        { label: 'หนังสือรับเข้า', value: '2', disabled: true },
        { label: 'หนังสือชั้นความลับ', value: '3' },
      ]}
    />
  )
}

export const Default = () => {
  return (
    <Formik initialValues={{ book: 'หนังสือรับเข้า' }} onSubmit={() => {}}>
      <Field
        name="book"
        label="กรุณาเลือกประเภทหนังสือ"
        component={SelectFormik}
        options={[
          { label: 'หนังสือภายใน', value: '1' },
          { label: 'หนังสือรับเข้า', value: '2', disabled: true },
          { label: 'หนังสือชั้นความลับ', value: '3' },
        ]}
      />
    </Formik>
  )
}
