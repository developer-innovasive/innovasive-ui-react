import React, { ReactElement, MouseEvent, useRef } from 'react'
import classNames from 'classnames'

export type ButtonProps = {
  color?: string
  children?: ReactElement
  innerRef?: any
  size?: 'Primary' | 'Secondary'
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void
}

export const Button: React.FC<ButtonProps> = ({ color = '#0010F7', children, innerRef, onClick, size = 'Primary' }) => {
  var hoverRef = useRef<HTMLDivElement>(null)

  function hoverHandler(state: boolean) {
    var style = hoverRef.current?.style

    if (state && style) {
      style.opacity = '0.15'
    } else if (!state && style) {
      style.opacity = '0'
    }
  }

  return (
    <div
      onClick={onClick}
      className={classNames(
        'relative flex justify-center items-center cursor-pointer overflow-hidden select-none',
        size === 'Primary' ? 'h-40' : 'h-32'
      )}
      onMouseOver={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      style={{ backgroundColor: color, borderRadius: '3px' }}
    >
      <div ref={hoverRef} style={{ opacity: 0 }} className="absolute w-full h-full bg-black transition-all duration-200 ease-in-out" />
      <div className="z-50">{children}</div>
    </div>
  )
}
