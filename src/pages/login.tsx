import React from 'react'
import LoginForm from '~/components/widgets/LoginForm'
import requireLogout from '~/hocs/requireLogout'

const LoginPage = ({ title }: { title: string }) => {
  return (
    <>
      <header>
        <title>{title}</title>
      </header>
      <div>
        <LoginForm />
      </div>
    </>
  )
}

export default requireLogout(LoginPage)
