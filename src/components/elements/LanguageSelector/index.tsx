import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from '~/i18n'
import Icon from '../Icon'

const LANGUAGE_OPTIONS = [
  {
    label: 'Tiếng Việt',
    value: 'vn',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png',
  },
  {
    label: 'English',
    value: 'en',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
  },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [langCode, setLangCode] = useState<string>('vn')

  const languageByLangCode: Record<string, any> = {}
  LANGUAGE_OPTIONS.forEach((option) => {
    languageByLangCode[option.value] = option
  })

  const onToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const onChangeLanguage = (langCode: string) => {
    i18next.changeLanguage(langCode)
    setLangCode(langCode)
    setIsOpen(false)
  }
  return (
    <div
      onClick={onToggleMenu}
      className="relative flex items-center justify-center px-2 py-1 bg-gray-200 rounded-full cursor-pointer focus:outline-none"
    >
      <div className="flex flex-row items-center">
        <img
          className="object-cover w-4 h-4 mr-1 rounded-full"
          src={languageByLangCode[langCode].flag}
          alt="vietnamese flag"
        />
        <p>{languageByLangCode[i18n.language].label}</p>
        <Icon name="chevronDown" style="w-4 h-4" />
      </div>
      {isOpen && (
        <div className="absolute bg-white bottom-0 translate-y-[105%] right-1 w-[150px] flex flex-col">
          {LANGUAGE_OPTIONS.map((option) => (
            <div
              key={option.value}
              className="flex flex-row items-center px-4 py-1 border-b border-gray-200 cursor-pointer"
              onClick={() => onChangeLanguage(option.value)}
            >
              <img className="object-cover w-4 h-4 mr-1 rounded-full" src={option.flag} alt="vietnamese flag" />
              {option.label}
              {option.value === langCode && <Icon name="check" style="w-4 h-4 ml-2" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
