import React from 'react'

interface Props {
  isDisplay: boolean
  content: string
}

const FullContent = ({ content, isDisplay }: Props) => {
  return <div className={`px-2 py-1 bg-slate-300 rounded-md ${isDisplay ? 'absolute' : 'hidden'}`}>{content}</div>
}

export default FullContent
