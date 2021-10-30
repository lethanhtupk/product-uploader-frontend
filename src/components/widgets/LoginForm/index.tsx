import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import CheckboxInput from '~/components/elements/Input/CheckboxInput'
import PasswordInput from '~/components/elements/Input/PasswordInput'
import SubmitInput from '~/components/elements/Input/SubmitInput'
import TextInput from '~/components/elements/Input/TextInput'
import { IUserInput, signIn } from '~/schema/mutations/signIn'
import { login } from '~/utils/authenticateUtils'
import { changeIncorrectAccountInformation, FormErrors, ResponseError } from '~/utils/errorUtils'
import { validateRequiredField } from '~/utils/validators'

const LoginForm = () => {
  const history = useHistory()
  const [userInput, setUserInput] = useState<IUserInput>()
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const mutation = useMutation(signIn)

  useEffect(() => {
    if (mutation.isError) {
      const responseError = mutation.error as ResponseError
      if (!responseError?.errors?.detail) {
        setFormErrors(responseError?.errors as FormErrors)
      }
    } else if (mutation.isSuccess) {
      login(mutation.data as { access: string; refresh: string })
      history.push('/')
    }
  }, [mutation.status])

  const onSubmit = (event: Event) => {
    event.preventDefault()
    if (Object.keys(formErrors).length > 0) {
      return
    }
    mutation.mutate(userInput)
  }

  const onChangeInput = (event: any) => {
    const { name, value } = event.target
    setUserInput({ ...userInput, [name]: value })
  }

  const onValidateInputField = (name: string) => {
    validateRequiredField(name, { ...userInput }[name], formErrors, setFormErrors)
  }

  return (
    <div className="w-1/2 max-w-xl center-content-in-screen">
      <h1 className="font-black text-center text-black mb-14">Sign in to your account</h1>
      <form className="flex flex-col p-8 bg-white rounded-lg ">
        <TextInput
          name="username"
          label="Username"
          placeholder="Username"
          errors={formErrors}
          onChange={onChangeInput}
          onBlur={() => onValidateInputField('username')}
        />
        <PasswordInput errors={formErrors} onChange={onChangeInput} onBlur={() => onValidateInputField('password')} />
        <div className="flex justify-between mt-2">
          {/* TODO: implements remember me feature later */}
          <CheckboxInput
            name="remember_me"
            label="Remember me"
            onClick={() => {
              console.log('clicked')
            }}
          />
          <a href="#" className="font-medium">
            Forget your password?
          </a>
        </div>
        <SubmitInput label="Sign in" onSubmit={onSubmit} />
        {(mutation.error as ResponseError)?.errors.detail && (
          <p className="text-error">{`*${changeIncorrectAccountInformation(
            (mutation.error as ResponseError)?.errors.detail as string,
          )}`}</p>
        )}
      </form>
    </div>
  )
}

export default LoginForm
