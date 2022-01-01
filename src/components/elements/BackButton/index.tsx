import React from 'react'
import { useHistory } from 'react-router-dom'
import Icon from '../Icon'

interface Props {
  positionStyle?: string
}

const BackButton = ({ positionStyle }: Props) => {
  const history = useHistory()

  const onBack = () => {
    history.goBack()
  }

  return (
    <button type="button" onClick={onBack} className={positionStyle}>
      <Icon style="w-12 h-12 hover:bg-gray-200 border-purple-700 border text-purple-700 rounded-full p-3" name="back" />
    </button>
  )
}

export default BackButton
