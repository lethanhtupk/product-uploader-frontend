import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      Username: 'Username',
      Password: 'Password',
      Register: 'Register',
      Login: 'Login',
      'Forget your password?': 'Forget your password?',
      'Sign in': 'Sign in',
      'Remember me': 'Remember me',
      'Sign in to your account': 'Sign in to your account',
      'This field is required.': 'This field is required.',
    },
  },
  vn: {
    translation: {
      Username: 'Tên tài khoản',
      Password: 'Mật khẩu',
      Register: 'Đăng ký',
      Login: 'Đăng nhập',
      'Forget your password?': 'Quên mật khẩu?',
      'Sign in': 'Đăng nhập',
      'Remember me': 'Nhớ tài khoản',
      'Sign in to your account': 'Đăng nhập ngay!',
      'This field is required.': 'Trường này là bắt buộc.',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vn', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
