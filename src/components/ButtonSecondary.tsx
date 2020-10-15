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
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ id, title, disabled = false, loading, onClick }) => {
  return (
    <ButtonBase
      id={id}
      disabled={disabled || loading}
      onClick={onClick}
      className={classnames({
        [`w-full relative flex justify-center items-center rounded-3 group overflow-hidden transition-all duration-200 focus:outline-none focus:shadow-outline`]: 'default',
        [`cursor-pointer`]: !disabled,
        [`cursor-default`]: loading,
        [`active:brightness-80`]: !disabled && !loading,
        [`disabled:cursor-not-allowed`]: disabled,
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
                  [`text-white heading2`]: !disabled,
                  [`text-innovasive-ui-disabled-dark heading2`]: disabled,
                })}
              >
                {isFunction(title) ? title({ disabled }) : title}
              </p>
            )}
          </div>
          <div
            className={classnames({
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`bg-innovasive-ui-secondary`]: !disabled,
              [`group-hover:brightness-95`]: !disabled && !loading,
              [`bg-innovasive-ui-disabled`]: disabled,
            })}
          ></div>
        </>
      )}
    </ButtonBase>
  )
}
