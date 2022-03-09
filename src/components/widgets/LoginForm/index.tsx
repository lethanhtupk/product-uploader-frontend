import React, { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import SubmitButton from '~/components/elements/buttons/SubmitButton'
import CheckboxInput from '~/components/elements/Input/CheckboxInput'
import PasswordInput from '~/components/elements/Input/PasswordInput'
import TextInput from '~/components/elements/Input/TextInput'
import { tokenState } from '~/recoil/atoms/authenticationState'
import { IUserInput, signIn } from '~/schema/mutations/signIn'
import { login } from '~/utils/authUtils'
import { changeIncorrectAccountInformation, FormErrors, ResponseError } from '~/utils/errorUtils'
import { validateRequiredField } from '~/utils/validators'

interface ITokens {
  access: string
  refresh: string
}

const LoginForm = () => {
  const history = useHistory()
  const { t } = useTranslation()
  const [userInput, setUserInput] = useState<IUserInput>()
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const setToken = useSetRecoilState(tokenState)
  const mutation = useMutation(signIn)

  useEffect(() => {
    if (mutation.isError) {
      const responseError = mutation.error as ResponseError
      if (!responseError?.errors?.detail) {
        setFormErrors(responseError?.errors as FormErrors)
      }
    } else if (mutation.isSuccess) {
      const tokens = mutation.data as ITokens
      login(tokens)
      setToken(() => {
        return { accessToken: tokens.access, refreshToken: tokens.refresh }
      })
      history.push('/')
    }
  }, [mutation.status])

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (Object.keys(formErrors).length > 0) {
      return
    }
    mutation.mutate(userInput)
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserInput({ ...userInput, [name]: value })
  }

  const onValidateInputField = (name: string) => {
    validateRequiredField(name, { ...userInput }[name], formErrors, setFormErrors)
  }

  return (
    <div className="w-1/2 max-w-xl center-content-in-screen">
      <h1 className="font-black text-center text-black mb-14">{t('Sign in to your account')}</h1>
      <form className="flex flex-col p-8 bg-white rounded-lg" onSubmit={onSubmit}>
        <TextInput
          name="username"
          label={t('Username')}
          placeholder={t('Username')}
          errors={formErrors}
          isRequired={true}
          onChange={onChangeInput}
          onBlur={() => onValidateInputField('username')}
        />
        <PasswordInput errors={formErrors} onChange={onChangeInput} onBlur={() => onValidateInputField('password')} />
        <div className="flex justify-between mt-2">
          {/* TODO: implements remember me feature later */}
          <CheckboxInput
            name="remember_me"
            label={t('Remember me')}
            onClick={() => {
              console.log('clicked')
            }}
          />
          <a href="#" className="font-medium">
            {t('Forget your password?')}
          </a>
        </div>
        <SubmitButton
          label={t('Sign in')}
          customStyle="rounded-lg bg-blue-600 hover:bg-blue-400 text-white py-3 mt-10 flex flex-row items-center justify-center"
          isLoading={mutation.isLoading}
        />
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
