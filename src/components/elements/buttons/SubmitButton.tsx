import React from 'react'
import LoadingIndicator from '../LoadingIndicator'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  label: string
  customStyle?: string
  isLoading?: boolean
}

const SubmitButton = ({ type = 'submit', label, customStyle, isLoading = false }: Props) => {
  return (
    <button type={type} className={customStyle || 'px-10 py-3 rounded-full hover:bg-blue-400 bg-blue-600 text-white'}>
      {isLoading && (
        <LoadingIndicator positionStyle="relative mr-2" options={{ color: '#CBD5E1', width: '20', height: '20' }} />
      )}
      {label}
    </button>
  )
}

export default SubmitButton
