import React from 'react'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label: string
  customStyle?: string
}

const SubmitButton = ({ type = 'submit', label, customStyle }: Props) => {
  return (
    <button type={type} className={customStyle || 'px-10 py-3 rounded-full hover:bg-blue-400 bg-blue-600 text-white'}>
      {label}
    </button>
  )
}

export default SubmitButton
