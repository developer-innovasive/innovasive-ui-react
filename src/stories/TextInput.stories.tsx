import { Meta, Story } from '@storybook/react/types-6-0'
import { Field, Formik } from 'formik'
import React from 'react'

import { TextInput, TextInputProps } from '../index'

export default {
  title: 'TextInput',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = args => <TextInput {...args} />

export const Default = Template.bind({})

export const Error = () => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <Field name="name" label="Your name" error="Required!" component={TextInput} />
    </Formik>
  )
}

export const Disable = Template.bind({})

Default.args = {
  label: 'Label',
  placeholder: 'Input Text',
}

Disable.args = {
  label: 'Label',
  disabled: true,
  value: 'Innovasive co., ltd.',
}
