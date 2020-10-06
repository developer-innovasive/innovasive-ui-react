import classnames from 'classnames'
import React, { MouseEvent } from 'react'

import { ButtonBase } from './ButtonBase'

export type ButtonSecondaryProps = {
  id?: string
  title?: string
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ id, title, disabled, onClick }) => {
  return (
    <ButtonBase
      id={id}
      disabled={disabled}
      onClick={onClick}
      className={classnames({
        [`w-full relative flex justify-center items-center rounded-3 group overflow-hidden focus:outline-none`]: 'default',
        [`cursor-pointer active:brightness-80`]: !disabled,
        [`disabled:cursor-not-allowed`]: disabled,
      })}
    >
      {() => (
        <>
          <div className="absolute z-10">
            <p
              className={classnames({
                [`text-white heading2`]: !disabled,
                [`text-innovasive-ui-disabled-dark heading2`]: disabled,
              })}
            >
              {title}
            </p>
          </div>
          <div
            className={classnames({
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`group-hover:brightness-95 bg-innovasive-ui-secondary`]: !disabled,
              [`bg-innovasive-ui-disabled`]: disabled,
            })}
          ></div>
        </>
      )}
    </ButtonBase>
  )
}
