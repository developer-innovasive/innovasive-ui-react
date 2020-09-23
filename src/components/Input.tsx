import './Input.css'

import React from 'react'

export type InputProps = {
  label?: string
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      <p className="text-xl">{props.label}</p>
      <input type="text" />
    </div>
  )
}
