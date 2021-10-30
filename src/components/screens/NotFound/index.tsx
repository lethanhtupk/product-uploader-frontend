import React from 'react'
import { useHistory } from 'react-router-dom'
import { NAVIGATION_PATHS } from '~/utils/routes'

const NotFound = ({
  statusCode,
  title,
  message,
  positionStyle,
}: {
  statusCode: number
  title: string
  message: string
  positionStyle?: string
}) => {
  const history = useHistory()
  const onGoHome = () => {
    history.push(NAVIGATION_PATHS.HOME)
  }

  return (
    <div className={`flex flex-row ${positionStyle || 'center-content'}`}>
      <div className="flex flex-row">
        <p className="pr-6 text-6xl font-bold text-blue-600">{statusCode}</p>
        <div className="w-px h-24 bg-gray-300"></div>
      </div>
      <div className="pl-6 leading-8">
        <p className="text-5xl font-bold">{title}</p>
        <p className="text-gray-500">{message}</p>
        <div className="mt-10">
          <button type="button" className="text-white bg-blue-600 btn hover:bg-blue-400" onClick={onGoHome}>
            Go back home
          </button>
          <button type="button" className="ml-2 text-blue-800 bg-blue-200 btn hover:bg-blue-400 hover:text-white">
            Contact support
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
