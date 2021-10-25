import React from 'react'
import Icon from '~/components/elements/Icon'

interface Props {
  title: string
  message: string
  actionLabel: string
  cancelLabel: string
  onAction?: any
  onCancel?: any
}

const Modal = ({ title, message, actionLabel, cancelLabel, onAction, onCancel }: Props) => {
  return (
    <div className="absolute max-w-lg px-6 py-4 translate-x-1/2 -translate-y-1/2 bg-white top-1/2 right-1/2 rounded-xl">
      <div className="flex flex-row">
        <div className="flex flex-row items-center justify-center w-10 h-10 p-2 bg-red-100 rounded-full">
          <Icon name="warning" style="w-6 h-6 text-red-600" />
        </div>
        <div className="ml-4 leading-7">
          <p className="text-lg font-medium text-gray-900 ">{title}</p>
          <p className="text-sm">{message}</p>
        </div>
        <div className="cursor-pointer" onClick={onCancel}>
          <Icon name="close" style="w-6 h-6 text-gray-700" />
        </div>
      </div>

      <div className="flex flex-row justify-end pt-6">
        <button
          type="button"
          className="px-6 py-2 mr-4 text-gray-700 bg-white border border-gray-100 rounded-lg hover:bg-gray-300"
          onClick={onAction}
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-500"
          onClick={onCancel}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  )
}

export default Modal
