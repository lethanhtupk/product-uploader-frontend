import React from 'react'

interface Props {
  content?: string
}

const FullContent = ({ content }: Props) => {
  return <div className="absolute px-3 py-2">{content}</div>
}

export default FullContent
