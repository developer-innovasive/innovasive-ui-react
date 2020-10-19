import { Meta } from '@storybook/react/types-6-0'
import { Field, Formik } from 'formik'
import React from 'react'

import { TextInput, TextInputFormik } from '../components/TextInput'

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta

export const Default = () => (
  <div>
    <TextInput label="รู้ไหม ใครเป็นพ่อของพลอย เชอร์มาลย์?" placeholder="ตอบ" />
  </div>
)

export const Error = () => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <Field
        name="name"
        label="เบอร์โทรศัพท์"
        error="กรุณากรอกให้ถูกต้อง!"
        component={TextInputFormik}
      />
    </Formik>
  )
}
