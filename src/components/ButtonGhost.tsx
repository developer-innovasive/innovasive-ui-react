import classnames from 'classnames'
import { isFunction } from 'lodash'
import React, { MouseEvent, ReactNode } from 'react'

import { ButtonBase } from './ButtonBase'
import { DarkLoading } from './DarkLoading'

type TitleProps = {
  disabled: boolean
}

export type ButtonGhostProps = {
  id?: string
  title?: string | ReactNode | ((props: TitleProps) => ReactNode)
  disabled?: boolean
  loading?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonGhost: React.FC<ButtonGhostProps> = ({ id, title, disabled = false, loading, onClick }) => {
  return (
    <ButtonBase
      id={id}
      disabled={disabled || loading}
      onClick={onClick}
      className={classnames({
        [`w-full relative flex justify-center items-center rounded-3 group overflow-hidden transition-all duration-200 focus:outline-none focus:shadow-outline`]: 'default',
        [`cursor-pointer`]: !disabled,
        [`disabled:cursor-not-allowed`]: disabled,
        [`active:brightness-80`]: !disabled && !loading,
      })}
    >
      {() => (
        <>
          <div className="absolute z-10">
            {loading ? (
              <DarkLoading />
            ) : (
              <p
                className={classnames({
                  [`sub-heading1`]: !disabled,
                  [`text-innovasive-ui-disabled-dark sub-heading1`]: disabled,
                })}
              >
                {isFunction(title) ? title({ disabled }) : title}
              </p>
            )}
          </div>
          <div
            className={classnames('w-full h-40', {
              [`w-full h-32 transition-all duration-200 ease-in-out`]: 'default',
              [`bg-innovasive-ui-grey-medium`]: !disabled,
              [`group-hover:brightness-95`]: !disabled && !loading,
              [`bg-innovasive-ui-disabled`]: disabled,
              [`cursor-default`]: loading,
            })}
          ></div>
        </>
      )}
    </ButtonBase>
  )
}
