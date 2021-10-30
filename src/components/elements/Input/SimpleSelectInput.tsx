import React from 'react'

interface Props {
  name: string
  label?: string
  options: { label: string; value: string | number | string[] }[]
  isRequired?: boolean
  isMulti?: boolean
  isDisable?: boolean
  labelStyle?: string
  inputStyle?: string
  optionStyle?: string
  onChange?: React.Dispatch<React.SetStateAction<unknown>>
}

const SimpleSelectInput = ({
  name,
  label,
  options,
  isDisable,
  isRequired,
  isMulti,
  labelStyle,
  inputStyle,
  optionStyle,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className={labelStyle || ''}>
        {label} {isRequired ? <span className="text-red-600"> &nbsp;*</span> : ''}
      </label>
      <select
        name={name}
        id={name}
        disabled={!!isDisable}
        required={!!isRequired}
        multiple={!!isMulti}
        className={inputStyle || 'bg-white border-gray-300 border py-2 focus:outline-none px-1 mx-1'}
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className={optionStyle || ''}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SimpleSelectInput
