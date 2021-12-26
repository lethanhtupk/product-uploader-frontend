import React from 'react'
import { FormErrors } from '~/utils/errorUtils'

interface Props {
  name: string
  label: string
  type?: string
  children?: React.ReactNode
  placeholder?: string
  isDisable?: boolean
  isRequired?: boolean
  labelStyle?: string
  inputStyle?: string
  errors?: FormErrors
  onChange: React.Dispatch<React.SetStateAction<unknown>>
  onBlur?: () => void
}

const TextInput = ({
  name,
  label,
  type = 'text',
  children,
  placeholder,
  isDisable = false,
  isRequired = false,
  labelStyle,
  inputStyle,
  errors,
  onChange,
  onBlur,
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className={labelStyle || 'mt-2 mb-1'}>
        {label}
        {isRequired ? <span className="text-red-600"> &nbsp;*</span> : ''}
      </label>
      <div className="relative flex flex-row items-center">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          className={
            inputStyle ||
            'px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 ring-blue-500'
          }
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
