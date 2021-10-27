import React from 'react'

interface Props {
  name: string
  label: string
  type?: string
  isDisable?: boolean
  labelStyle?: string
  inputStyle?: string
  onClick: React.Dispatch<React.SetStateAction<unknown>>
}

const CheckboxInput = ({ name, label, labelStyle }: Props) => {
  return (
    <div className="flex flex-row items-center">
      <input type="checkbox" id={name} />
      <label className={labelStyle || 'ml-2'} htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

export default CheckboxInput
