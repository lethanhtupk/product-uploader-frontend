import React from 'react'

interface Props {
  type: 'button' | 'reset'
  label: string
  customStyle: string
  onClick: () => void
}

const Button = ({ type, label, customStyle, onClick }: Props) => {
  return (
    <button type={type} className={customStyle || ''} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
