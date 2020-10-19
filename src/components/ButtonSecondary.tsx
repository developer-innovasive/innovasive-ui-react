import classnames from 'classnames'
import { isFunction } from 'lodash'
import React, { MouseEvent, ReactNode } from 'react'

import { ButtonBase } from './ButtonBase'
import { Loading } from './Loading'

type TitleProps = {
  disabled: boolean
}

export type ButtonSecondaryProps = {
  id?: string
  title?: string | ReactNode | ((props: TitleProps) => ReactNode)
  disabled?: boolean
  loading?: boolean
  rounded?: 'none' | 'default' | 'full'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
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
        [`cursor-default`]: loading,
        [`active:brightness-80 cursor-pointer`]: !disabled && !loading,
        [`disabled:cursor-not-allowed`]: disabled,
        [`rounded-3`]: rounded === `default`,
        [`rounded-none`]: rounded === `none`,
        [`rounded-full`]: rounded === `full`,
      })}
    >
      {() => (
        <>
          <div className="absolute z-10">
            {loading ? (
              <Loading />
            ) : (
              <p
                className={classnames({
                  [`subheading1`]: 'default',
                  [`text-white`]: !disabled,
                  [`text-grey-500`]: disabled,
                })}
              >
                {isFunction(title) ? title({ disabled }) : title}
              </p>
            )}
          </div>
          <div
            className={classnames({
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`bg-secondary-700`]: !disabled,
              [`group-hover:brightness-95`]: !disabled && !loading,
              [`bg-grey-100`]: disabled,
            })}
          ></div>
        </>
      )}
    </ButtonBase>
  )
}
