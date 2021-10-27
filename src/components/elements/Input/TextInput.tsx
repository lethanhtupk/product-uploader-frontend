import React from 'react'
import { FormErrors } from '~/utils/errorUtils'
import { requiredValue } from '~/utils/validators'

interface Props {
  name: string
  label: string
  type?: string
  children?: JSX.Element
  placeholder?: string
  isDisable?: boolean
  labelStyle?: string
  inputStyle?: string
  errors?: FormErrors
  onChange: React.Dispatch<React.SetStateAction<unknown>>
  onBlur?: any
}

const TextInput = ({
  name,
  label,
  type = 'text',
  children,
  placeholder,
  isDisable = false,
  labelStyle,
  inputStyle,
  errors,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className={labelStyle || 'my-2'}>
        {label}
      </label>
      <div className="relative flex flex-row items-center">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={inputStyle || 'px-4 py-2 border border-gray-300 rounded-lg w-full'}
          disabled={isDisable}
          onChange={onChange}
          onBlur={onBlur}
        />
        {children}
      </div>
      {errors &&
        errors[name] &&
        errors[name].map((error, index) => (
          <p key={index} className="text-error">
            {error}
          </p>
        ))}
    </div>
  )
}

export default TextInput
