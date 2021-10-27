import React from 'react'

export const REQUIRED_FIELD_MESSAGE = 'This field is required.'

export const requiredValue = (value: string): string => {
  if (!value || value === '') {
    return REQUIRED_FIELD_MESSAGE
  }
}

export const validateRequiredField = (
  name: string,
  value: string,
  errors: Record<string, unknown>,
  setErrors: React.Dispatch<React.SetStateAction<unknown>>,
) => {
  if (!value || value === '') {
    setErrors({ ...errors, [name]: [REQUIRED_FIELD_MESSAGE] })
  } else {
    delete errors[name]
    setErrors(errors)
  }
}
