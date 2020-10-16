import { Switch as HeadlessSwitch } from '@headlessui/react'
import classnames from 'classnames'
import { FieldInputProps, FieldMetaProps, FieldProps, FormikProps, FormikValues } from 'formik'
import React, { InputHTMLAttributes } from 'react'

type SwitchProps<V = any> = {
  label: string
  checked: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
  field?: FieldInputProps<V>
  form?: FormikProps<FormikValues>
  meta?: FieldMetaProps<V>
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked: $checked,
  disabled = false,
  onChange: $onChange,
  field,
  form,
}) => {
  const checked = field?.checked ?? $checked

  return (
    <HeadlessSwitch.Group as="div" className="flex items-center space-x-4">
      <HeadlessSwitch.Label>{label}</HeadlessSwitch.Label>
      <HeadlessSwitch
        as="button"
        name={field?.name}
        disabled={disabled}
        checked={checked}
        onChange={value => {
          form?.setFieldValue(field?.name ?? '', value)
          $onChange && $onChange(value)
        }}
        className={classnames({
          [`relative inline-flex h-24 w-40 flex-shrink-0 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:shadow-outline`]: true,
          [`bg-innovasive-ui-grey-medium`]: !checked,
          [`bg-innovasive-ui-primary`]: checked,
          [`cursor-pointer`]: !disabled,
          [`cursor-not-allowed bg-opacity-50`]: disabled,
        })}
      >
        {({ checked }) => (
          <span
            style={{ height: 20, width: 20 }}
            className={classnames({
              [`inline-block transition duration-200 ease-in-out transform bg-white rounded-full`]: true,
              [`translate-x-0`]: !checked,
              [`translate-x-16`]: checked,
            })}
          />
        )}
      </HeadlessSwitch>
    </HeadlessSwitch.Group>
  )
}

export type SwitchFormikProps = SwitchProps & FieldProps & InputHTMLAttributes<HTMLInputElement>

export const SwitchFormik: React.FC<SwitchProps> = args => <Switch {...args} />
