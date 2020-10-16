import { Listbox, Transition } from '@headlessui/react'
import classnames from 'classnames'
import { FieldInputProps, FieldMetaProps, FieldProps, FormikProps, FormikValues } from 'formik'
import { find, map } from 'lodash'
import React, { SelectHTMLAttributes } from 'react'

type Option = {
  label: string
  value: string
  disabled?: boolean
}

type Props<V = any> = {
  value: any
  options: Option[]
  disabled?: boolean
  error?: string
  label?: string
  onChange?: (value: any) => void
  field?: FieldInputProps<V>
  form?: FormikProps<FormikValues>
  meta?: FieldMetaProps<V>
}

export type SelectProps = Props & SelectHTMLAttributes<HTMLSelectElement>

export const Select: React.FC<SelectProps> = ({
  label,
  value: $value,
  options,
  onChange: $onChange,
  error: $error,
  form,
  field: { ...fields },
  disabled = false,
  ...restProps
}) => {
  const error = form?.errors[fields?.name] ?? $error
  const value = fields?.value ?? $value

  return (
    <Listbox
      value={value}
      onChange={value => {
        form?.setFieldValue(fields?.name, value)
        $onChange && $onChange(value)
      }}
      {...restProps}
    >
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label>
              <div className="mb-8 text-body">{label}</div>
            </Listbox.Label>
          )}
          <div className="relative">
            <Listbox.Button
              disabled={disabled}
              className={classnames({
                [`relative flex items-center justify-between w-full h-40 pl-16 transition duration-150 ease-in-out 
                bg-white border rounded-3 focus:outline-none focus:shadow-outline 
                disabled:bg-grey-100 disabled:cursor-not-allowed`]: true,
                [`border-grey-300`]: !error,
                [`border-red-500`]: error,
              })}
            >
              <p
                className={classnames({
                  [`text-body`]: true,
                  [`text-grey-500`]: disabled || !value,
                })}
              >
                {find(options, { value })?.label || label}
              </p>
              <span className="absolute inset-y-0 right-0 flex items-center pr-16 pointer-events-none">
                <svg
                  className={classnames({
                    [`fill-current text-grey-500`]: true,
                  })}
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.2458 0.290792C10.0584 0.104542 9.80498 0 9.5408 0C9.27661 0 9.02316 0.104542 8.8358 0.290792L5.2458 3.83079L1.7058 0.290792C1.51844 0.104542 1.26498 0 1.0008 0C0.736612 0 0.483161 0.104542 0.295798 0.290792C0.20207 0.383755 0.127675 0.494356 0.0769067 0.616216C0.026138 0.738075 0 0.868781 0 1.00079C0 1.1328 0.026138 1.26351 0.0769067 1.38537C0.127675 1.50723 0.20207 1.61783 0.295798 1.71079L4.5358 5.95079C4.62876 6.04452 4.73936 6.11891 4.86122 6.16968C4.98308 6.22045 5.11379 6.24659 5.2458 6.24659C5.37781 6.24659 5.50852 6.22045 5.63037 6.16968C5.75223 6.11891 5.86283 6.04452 5.9558 5.95079L10.2458 1.71079C10.3395 1.61783 10.4139 1.50723 10.4647 1.38537C10.5155 1.26351 10.5416 1.1328 10.5416 1.00079C10.5416 0.868781 10.5155 0.738075 10.4647 0.616216C10.4139 0.494356 10.3395 0.383755 10.2458 0.290792Z" />
                </svg>
              </span>
            </Listbox.Button>
            <div
              className={classnames({
                [`mt-8 text-body text-red-500 transform transition-all duration-500 ease-in-out absolute z-0`]: true,
                [`opacity-1 00 translate-y-0`]: error,
                [`opacity-0 -translate-y-16`]: !error,
              })}
            >
              {error}
            </div>

            <Transition
              show={open && !disabled}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute z-10 w-full mt-8 bg-white border shadow-md rounded-3 border-grey-300"
            >
              <Listbox.Options static className="py-4 overflow-auto max-h-160 focus:outline-none">
                {map(options, option => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className="focus:outline-none"
                  >
                    {({ active, disabled }) => (
                      <div
                        className={classnames({
                          [`flex text-body items-center h-40 px-16 bg-white cursor-default select-none focus:outline-none`]: true,
                          [`bg-grey-100`]: active,
                          [`active:bg-grey-300`]: !disabled,
                          [`text-grey-500 cursor-not-allowed`]: disabled,
                        })}
                      >
                        {option.label}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

export type SelectFormikProps = SelectProps & FieldProps

export const SelectFormik: React.FC<SelectFormikProps> = args => <Select {...args} />
