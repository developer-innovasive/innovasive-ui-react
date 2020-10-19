import classnames from 'classnames'
import React, { MouseEvent } from 'react'

import { ButtonBase } from './ButtonBase'
import { LoadingPrimary } from './LoadingPrimary'

export type ButtonOutlineProps = {
  id?: string
  title?: string
  disabled?: boolean
  loading?: boolean
  rounded?: 'none' | 'default' | 'full'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  id,
  title,
  disabled,
  loading,
  rounded = 'default',
  onClick,
}) => {
  return (
    <ButtonBase
      id={id}
      disabled={disabled || loading}
      onClick={onClick}
      className={classnames({
        [`w-full relative flex justify-center items-center group overflow-hidden border transition-all duration-200 focus:outline-none focus:shadow-outline`]: 'default',
        [`border-primary-500`]: !disabled,
        [`active:brightness-80 cursor-pointer`]: !disabled && !loading,
        [`disabled:cursor-not-allowed border-grey-300`]: disabled,
        [`cursor-default`]: loading,
        [`rounded-3`]: rounded === `default`,
        [`rounded-none`]: rounded === `none`,
        [`rounded-full`]: rounded === `full`,
      })}
    >
      {() => (
        <>
          <div className="absolute z-10">
            {loading ? (
              <LoadingPrimary />
            ) : (
              <p
                className={classnames({
                  [`text-primary-500 heading2`]: !disabled,
                  [`text-grey-500 heading2`]: disabled,
                })}
              >
                {title}
              </p>
            )}
          </div>
          <div
            className={classnames('w-full h-40', {
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`group-hover:brightness-95`]: !disabled && !loading,
              [`bg-grey-100`]: disabled,
              [`cursor-default`]: loading,
            })}
          ></div>
        </>
      )}
    </ButtonBase>
  )
}
