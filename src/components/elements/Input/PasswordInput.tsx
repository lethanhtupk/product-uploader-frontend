import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Icon from '~/components/elements/Icon'
import TextInput from '~/components/elements/Input/TextInput'
import { FormErrors } from '~/utils/errorUtils'

interface Props {
  errors?: FormErrors
  onChange: React.Dispatch<React.SetStateAction<unknown>>
  onBlur?: any
}

const PasswordInput = ({ errors, onChange, onBlur }: Props) => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <TextInput
      name="password"
      type={showPassword ? 'text' : 'password'}
      label={t('Password')}
      placeholder={t('Password')}
      errors={errors}
      isRequired={true}
      onChange={onChange}
      onBlur={onBlur}
    >
      <div className="absolute cursor-pointer right-3" onClick={onToggleShowPassword}>
        <Icon name={showPassword ? 'eyeOff' : 'eye'} style="w-6 h-6  text-gray-600" />
      </div>
    </TextInput>
  )
}

export default PasswordInput
