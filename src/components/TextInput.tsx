import classnames from 'classnames'
import { FieldProps } from 'formik'
import React, { InputHTMLAttributes } from 'react'

type InputProps = {
  label?: string
  error?: string
}

export type TextInputProps = InputProps & FieldProps & InputHTMLAttributes<HTMLInputElement>

export const TextInput: React.FC<TextInputProps> = ({ label = '', error: $error, field: { ...fields }, form, ...restProps }) => {
  const error = form?.errors[fields.name] ?? $error

  return (
    <div>
      <div className="mb-8 leading-3 inno-label text-innovasive-ui-label">{label}</div>
      <input
        className={classnames({
          [`w-full border inno-placeholder rounded-3 outline-none  h-40 px-24 transition-all duration-200 ease-in-out placeholder text-innovasive-ui-placeholder innovasive-ui-value disabled:cursor-not-allowed disabled:bg-innovasive-ui-disabled`]: true,
          [`bg-innovasive-ui-disabled-bg border-innovasive-ui-disabled-border border-innovasive-ui-error`]: error,
          [`bg-white border-innovasive-ui-border focus:border-black`]: !error,
        })}
        {...restProps}
        {...fields}
      />
      <div
        className={classnames({
          [`mt-8 leading-3 text-innovasive-ui-error transform inno-label transition-all h-24 duration-500 ease-in-out`]: true,
          [`opacity-1 00 translate-y-0`]: error,
          [`opacity-0 -translate-y-16`]: !error,
        })}
      >
        {error}
      </div>
    </div>
  )
}
