import React, { MouseEvent, ReactNode } from 'react'

export type BaseButtonChildrenProps = {
  disabled?: boolean
}

export type ButtonBaseProps = {
  id?: string
  disabled?: boolean
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  children?: (props: BaseButtonChildrenProps) => ReactNode
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
  id,
  disabled = false,
  className,
  onClick,
  children = () => <div></div>,
}) => {
  return (
    <button id={id} onClick={onClick} disabled={disabled} className={className}>
      {children({ disabled })}
    </button>
  )
}
