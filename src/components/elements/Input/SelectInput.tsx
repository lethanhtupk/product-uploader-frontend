import React from 'react'
import Select from 'react-select'
import { ResponseError } from '~/utils/errorUtils'

interface Props {
  name: string
  label?: string
  placeholder?: string
  isMulti?: boolean
  isDisable?: boolean
  isRequired?: boolean
  isLoading: boolean
  labelStyle?: string
  options: Record<string, unknown>[]
  error?: ResponseError
  getOptionLabel: (option: Record<string, unknown>) => string
  getOptionValue: (option: Record<string, unknown>) => string
  onChange: any
}

const customStyles = {
  valueContainer: (provided: Record<string, unknown>) => ({
    ...provided,
    paddingTop: 5,
    paddingBottom: 5,
  }),
}

const SelectInput = ({
  name,
  label,
  placeholder,
  isMulti = false,
  isDisable = false,
  isRequired = false,
  isLoading,
  labelStyle,
  options,
  error,
  getOptionLabel,
  getOptionValue,
  onChange,
}: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <label className={labelStyle || 'mt-2 mb-1'} htmlFor={name}>
          {label} {isRequired ? <span className="text-red-600">&nbsp;*</span> : null}
        </label>
      </div>
      <Select
        id={name}
        placeholder={placeholder}
        styles={customStyles}
        isMulti={isMulti}
        isDisabled={isDisable}
        isLoading={isLoading}
        options={options}
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        onChange={onChange}
      />
      {error && error.errors?.detail && <p className="text-error">{error.errors.detail}</p>}
    </>
  )
}

export default SelectInput
