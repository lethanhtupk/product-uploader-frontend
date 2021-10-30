import React from 'react'

interface Props {
  name: string
  label?: string
  options: { label: string; value: string | number | string[] }[]
  isRequired?: boolean
  isMulti?: boolean
  isDisable?: boolean
  inputStyle?: string
  optionStyle?: string
  onChange?: React.Dispatch<React.SetStateAction<unknown>>
}

const SelectInput = ({
  name,
  label,
  options,
  isDisable,
  isRequired,
  isMulti,
  inputStyle,
  optionStyle,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        disabled={!!isDisable}
        required={!!isRequired}
        multiple={!!isMulti}
        className={inputStyle || ''}
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

export default SelectInput
