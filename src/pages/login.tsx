import React from 'react'
import LoginForm from '~/components/widgets/LoginForm'

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

export default LoginPage
