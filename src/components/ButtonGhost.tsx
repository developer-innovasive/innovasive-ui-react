import classnames from 'classnames'
import { isFunction } from 'lodash'
import React, { MouseEvent, ReactNode } from 'react'

import { ButtonBase } from './ButtonBase'
import { LoadingDark } from './LoadingDark'

type TitleProps = {
  disabled: boolean
}

export type ButtonGhostProps = {
  id?: string
  title?: string | ReactNode | ((props: TitleProps) => ReactNode)
  disabled?: boolean
  loading?: boolean
  rounded?: 'none' | 'default' | 'full'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonGhost: React.FC<ButtonGhostProps> = ({
  id,
  title,
  disabled = false,
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
        [`w-full relative flex justify-center items-center group overflow-hidden transition-all duration-200 focus:outline-none focus:shadow-outline`]: 'default',
        [`disabled:cursor-not-allowed`]: disabled,
        [`active:brightness-80 cursor-pointer`]: !disabled && !loading,
        [`rounded-3`]: rounded === `default`,
        [`rounded-none`]: rounded === `none`,
        [`rounded-full`]: rounded === `full`,
      })}
    >
      {() => (
        <>
          <div className="absolute z-10">
            {loading ? (
              <LoadingDark />
            ) : (
              <p
                className={classnames({
                  [`subheading1`]: 'default',
                  [`text-grey-500`]: disabled,
                })}
              >
                {isFunction(title) ? title({ disabled }) : title}
              </p>
            )}
          </div>
          <div
            className={classnames('w-full h-40', {
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`bg-grey-300`]: !disabled,
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
