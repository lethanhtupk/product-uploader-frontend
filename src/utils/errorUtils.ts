export const UNKNOWN_ERROR = {
  code: 4000,
  errors: {
    detail: 'Something went wrong. Please contact with the admin.',
  },
}

export interface DetailError {
  error_code?: string
  detail?: string
}

export interface FormErrors {
  [key: string]: string[]
}

export interface ResponseError {
  // error return from server
  code: number
  errors: DetailError | FormErrors
}

// because the message from backend is unclear
export const changeIncorrectAccountInformation = (message: string) => {
  if (message === 'No active account found with the given credentials') {
    return 'The username or password is incorrect.'
  }
  return message
}
