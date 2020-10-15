import classnames from 'classnames'
import { FieldInputProps, FieldMetaProps, FieldProps, FormikProps, FormikValues } from 'formik'
import React, { InputHTMLAttributes } from 'react'

type Props<V = any> = {
  label?: string
  error?: string
  value?: string
  field?: FieldInputProps<V>
  form?: FormikProps<FormikValues>
  meta?: FieldMetaProps<V>
}

export type TextInputProps = Props & InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<TextInputProps> = ({ label = '', error: $error, field: { ...fields }, form, ...restProps }) => {
  const error = form?.errors[fields?.name] ?? $error

  return (
    <div>
      <div className="mb-8 text-body">{label}</div>
      <input
        className={classnames({
          [`w-full border text-body rounded-3 outline-none  h-40 px-16 transition-all duration-200 ease-in-out placeholder text-body disabled:cursor-not-allowed disabled:bg-innovasive-ui-disabled`]: true,
          [`bg-innovasive-ui-disabled-bg border-innovasive-ui-disabled-border border-innovasive-ui-error`]: error,
          [`bg-white border-innovasive-ui-grey-medium focus:border-black`]: !error,
        })}
        {...restProps}
        {...fields}
      />
      <div
        className={classnames({
          [`mt-8 text-innovasive-ui-error transform text-body transition-all h-24 duration-500 ease-in-out`]: true,
          [`opacity-1 00 translate-y-0`]: error,
          [`opacity-0 -translate-y-16`]: !error,
        })}
      >
        {error}
      </div>
    </div>
  )
}

export type TextInputFormikProps = TextInputProps & FieldProps

export const TextInputFormik: React.FC<TextInputProps> = args => <TextInput {...args} />
