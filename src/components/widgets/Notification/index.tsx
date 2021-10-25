import React, { useEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import Icon from '~/components/elements/Icon'
import { notificationState } from '~/recoil/atoms/notificationState'

const Notification = () => {
  const notification = useRecoilValue(notificationState)
  const setNotification = useSetRecoilState(notificationState)

  console.log(notification.isShow, notification.type)

  useEffect(() => {
    setTimeout(() => {
      setNotification({ ...notification, isShow: false })
    }, 3000)
  }, [])

  return (
    <div
      className={`fixed flex flex-row justify-between p-4 bg-white rounded-xl top-28 filter drop-shadow-xl ${
        notification.isShow ? 'animate-slideIn right-8' : 'animate-slideOut -right-full'
      }`}
    >
      <Icon name={notification.type} style={`w-6 h-6 ${notification.type} mr-1`} />
      <div className="text-sm leading-7">
        <p className={`font-medium ${notification.type}`}>Successfully saved!</p>
        <p className="text-gray-500">Anyone with a link can now view this file.</p>
      </div>
      <Icon name="close" style="w-6 h-6 text-gray-600" />
    </div>
  )
}

export default Notification
