import classnames from 'classnames'
import { Field } from 'formik'
import { isEmpty, isEqual } from 'lodash'
import React, { FC, useRef, useState } from 'react'

import { useOnClickOutside } from '../hooks/use-on-click-outside'

type SelectOption = {
  id: string
  value: string
}

export type SelectProps = {
  label?: string
  placeholder?: string
  value: string
  options: SelectOption[]
  disabled: boolean
  error?: string
  textSize?: 'small' | 'default'
  onChange?: (value: any) => void
}

export const Select: FC<SelectProps> = ({ label, value, options, disabled, error, onChange, placeholder, textSize = 'default' }) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>
  useOnClickOutside(ref, () => setIsOpen(false))
  const [isOpen, setIsOpen] = useState(false)

  const isNoValue = isEmpty(value)
  const isError = !isEmpty(error)

  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOnSelect = (value: any) => {
    setIsOpen(false)
    onChange && onChange(value)
  }

  return (
    <div className="h-72">
      <div className="mb-8 leading-3 inno-label text-innovasive-ui-label">{label}</div>
      <div
        ref={ref}
        className={classnames('relative', {
          'bg-white': !disabled,
          'bg-innovasive-ui-disabled-bg': disabled,
        })}
      >
        <button
          disabled={disabled}
          onClick={handleOnClick}
          type="button"
          className={classnames('rounded border w-full h-40 px-24 focus:outline-none', {
            'cursor-not-allowed border-innovasive-ui-disabled-border': disabled,
            'border-innovasive-ui-border': !isError,
            'border-innovasive-ui-error': isError,
          })}
        >
          <div className="flex items-center">
            <span
              className={classnames(
                { 'inno-options-small': textSize === 'small', 'inno-options-default': textSize !== 'small' },
                'text-innovasive-ui-placeholder'
              )}
            >
              {isNoValue ? placeholder : value}
            </span>
          </div>
          <span className="absolute inset-y-0 right-0 flex items-center pr-24 pointer-events-none">
            <svg
              className={classnames('fill-current', {
                'text-innovasive-ui-placeholder': !disabled,
                'text-innovasive-ui-disabled-border': disabled,
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
        </button>
        {isOpen && (
          <div className="absolute w-full max-h-160 overflow-y-scroll mt-4 border border-innovasive-ui-border rounded shadow-md overflow-hidden bg-white">
            <ul>
              {options?.map(o => (
                <li
                  key={o.id}
                  onClick={() => handleOnSelect(o.value)}
                  className={classnames('h-40 flex items-center px-24 cursor-pointer bg-white', {
                    'bg-innovasive-ui-options-selected hover:bg-innovasive-ui-options-selected': isEqual(value, o.value),
                    'hover:bg-innovasive-ui-options-hover': !isEqual(value, o.value),
                  })}
                >
                  <span className={classnames({ 'inno-options-small': textSize === 'small', 'inno-options-default': textSize !== 'small' })}>
                    {o.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isError && !disabled && <p className="inno-label text-innovasive-ui-error mt-8 leading-3">{error}</p>}
    </div>
  )
}

type ForkmikProps = {
  name: string
}

export type SelectForkmikProps = ForkmikProps & SelectProps

export const SelectFormik: FC<SelectForkmikProps> = (props: SelectForkmikProps) => {
  return <Field name={props.name}>{({ field, meta }: any) => <Select {...field} error={meta.error} {...props} />}</Field>
}
