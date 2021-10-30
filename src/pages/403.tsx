import React from 'react'
import { useRecoilValue } from 'recoil'
import NotFound from '~/components/screens/NotFound'
import { getCurrentUser } from '~/recoil/atoms/authenticationState'

const Forbidden403Page = () => {
  const me = useRecoilValue(getCurrentUser)

  return (
    <>
      <header>
        <title>Product Uploader | 403</title>
      </header>
      <NotFound
        statusCode={403}
        title="Forbidden"
        message="Access is not granted."
        positionStyle={me ? 'center-in-main-content' : null}
      />
    </>
  )
}

export default Forbidden403Page
