import classnames from 'classnames'
import React, { MouseEvent, ReactNode } from 'react'

export type ButttonIconProps = {
  children: ReactNode
  disabled: boolean
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

export const ButtonIcon: React.FC<ButttonIconProps> = props => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classnames({
        [`w-40 h-40 p-8 flex justify-center items-center rounded-full transition-all duration-200 ease-in-out focus:outline-none`]: true,
        [`cursor-not-allowed text-innovasive-ui-placeholder bg-innovasive-ui-disabled`]: props.disabled,
        [`hover:bg-innovasive-ui-hover active:bg-innovasive-ui-active`]: !props.disabled,
      })}
    >
      {props.children}
    </button>
  )
}
