import React from 'react'

interface Props {
  label: string
  isDisable?: boolean
  customStyle?: string
  onSubmit: any
}

const SubmitInput = ({ label, isDisable, customStyle, onSubmit }: Props) => {
  return (
    <input
      type="submit"
      value={label}
      disabled={isDisable}
      className={customStyle || 'px-8 py-4 mt-10 font-medium text-white bg-blue-600 rounded-lg cursor-pointer'}
      onClick={onSubmit}
    />
  )
}

export default SubmitInput
