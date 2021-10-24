export const UNKNOWN_ERROR = {
  code: 4000,
  errors: {
    details: 'Something went wrong. Please contact with the admin.',
  },
}

export interface FormErrors {
  [key: string]: string[]
}
