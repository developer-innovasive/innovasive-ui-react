import { Meta } from '@storybook/react/types-6-0'
import { Field, Formik } from 'formik'
import React from 'react'

import { Switch, SwitchFormik } from '../components/Switch'

export default {
  title: 'Switch',
  component: Switch,
} as Meta

export const Default = () => {
  return (
    <Formik initialValues={{ toggle: true }} onSubmit={() => {}}>
      <Field type="checkbox" name="toggle" component={SwitchFormik} />
    </Formik>
  )
}

export const Disabled = () => {
  return (
    <div className="space-y-16">
      <Switch label="Checked disabled" checked={true} onChange={() => {}} disabled={true} />
      <Switch label="Disabled" checked={false} onChange={() => {}} disabled={true} />
    </div>
  )
}
