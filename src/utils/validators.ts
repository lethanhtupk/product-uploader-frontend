import React from 'react'
import i18next from '~/i18n'
import { FormErrors } from '~/utils/errorUtils'

export const REQUIRED_FIELD_MESSAGE = 'This field is required'

export const requiredValue = (value: string): string => {
  if (!value || value === '') {
    return REQUIRED_FIELD_MESSAGE
  }
}

export const validateRequiredField = (
  name: string,
  value: string,
  errors: FormErrors,
  setErrors: React.Dispatch<React.SetStateAction<unknown>>,
) => {
  if (!value || value === '') {
    setErrors({ ...errors, [name]: [i18next.t(REQUIRED_FIELD_MESSAGE)] })
  } else {
    !!errors[name] && delete errors[name]
    setErrors(errors)
  }
}
