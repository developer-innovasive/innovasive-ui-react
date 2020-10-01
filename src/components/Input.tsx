import { Field } from 'formik'
import React, { ChangeEvent, KeyboardEvent } from 'react'

export type TextInputProps = {
  label?: string
  placeholder?: string
  error?: string
  disabled?: boolean
  value?: string | number
  type?: 'text' | 'password' | 'number'
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e?: KeyboardEvent<HTMLInputElement>) => void
  innerRef?: any
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  error,
  disabled,
  value = '',
  type = 'text',
  innerRef,
  onChange,
  onKeyPress,
}) => {
  return (
    <div>
      <div className="mb-8 leading-3 inno-label text-innovasive-ui-label">{label}</div>
      <input
        ref={innerRef}
        type={type || 'text'}
        disabled={disabled}
        className={`w-full border inno-placeholder ${
          disabled ? 'bg-innovasive-ui-disabled-bg border-innovasive-ui-disabled-border cursor-not-allowed' : 'bg-white border-innovasive-ui-border'
        } ${
          error ? 'border-innovasive-ui-error' : 'focus:border-black '
        }  outline-none h-40 px-24 transition-all duration-200 ease-in-out placeholder text-innovasive-ui-placeholder`}
        style={{
          borderRadius: '3px',
        }}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e)}
        onKeyPress={e => onKeyPress && onKeyPress(e)}
      />
      <div
        className={`mt-8 leading-3 text-innovasive-ui-error transform inno-label ${
          error ? 'opacity-1 00 translate-y-0' : 'opacity-0 -translate-y-16'
        } transition-all h-24 duration-500 ease-in-out`}
      >
        {error}
      </div>
    </div>
  )
}

export type FormikProps = {
  name: string
}

export type TextInputFormikProps = TextInputProps & FormikProps

export const TextInputFormik: React.FC<TextInputFormikProps> = (props: TextInputFormikProps) => {
  return <Field name={props.name}>{({ field, meta }: any) => <TextInput {...field} error={meta.error} {...props} />}</Field>
}
