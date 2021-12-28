import React, { useEffect, useRef, useState } from 'react'
import Icon from '~/components/elements/Icon'
import { truncateLongText } from '~/utils/commonUtils'
import { ICell } from '~/utils/dataTableUtils'
import FullContent from '../elements/FullContent'

interface Props {
  isHeading?: boolean
  customStyle?: string
  value: ICell | string
}

const Cell = ({ isHeading, customStyle, value }: Props) => {
  const [showAll, setShowAll] = useState<boolean>(false)
  const cellRef = useRef<HTMLTableCellElement>(null)

  useEffect(() => {
    if (!cellRef.current) {
      return
    }
    cellRef.current.addEventListener('mouseenter', onMouseEnter)
    cellRef.current.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cellRef.current.removeEventListener('mouseenter', onMouseEnter)
      cellRef.current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [cellRef.current])

  const onMouseEnter = () => {
    setShowAll(true)
  }

  const onMouseLeave = () => {
    setShowAll(false)
  }

  return (
    <>
      {isHeading ? (
        <th
          className={
            customStyle ||
            `bg-slate-300 py-2 text-gray-900 font-medium uppercase px-3 ${
              value === 'index' ? 'text-center' : 'text-left min-w-150px'
            }`
          }
        >
          {value}
        </th>
      ) : Array.isArray(value) ? (
        <td className={customStyle || 'py-3 px-3 border-b border-gray-300'}>
          <div className="flex flex-row items-center justify-center">
            {value.map((item) => (
              <div
                key={item}
                className={`px-2 py-1 mr-2 flex flex-row text-white ${
                  item === 'details'
                    ? 'bg-blue-600 hover:bg-blue-500'
                    : item === 'edit'
                    ? 'bg-green-600 hover:bg-green-500'
                    : 'bg-red-600 hover:bg-red-500'
                } rounded-lg`}
              >
                <Icon name={item} style="w-6 h-6 mr-1" />
                <button type="button" className="capitalize">
                  {item}
                </button>
              </div>
            ))}
          </div>
        </td>
      ) : (
        <td
          ref={cellRef}
          className={
            customStyle ||
            `py-3 px-3 border-b border-gray-300 min-w-100px relative ${!(value as ICell).content ? 'text-left' : ''} ${
              (value as ICell).content !== '' && !isNaN(Number((value as ICell).content)) ? 'text-center' : ''
            }`
          }
        >
          {(value as ICell).shouldTruncate
            ? truncateLongText((value as ICell).content || '--', (value as ICell).maxLength)
            : (value as ICell).content || '--'}
          <FullContent
            content={(value as ICell).content}
            isDisplay={
              showAll && (value as ICell).shouldTruncate && (value as ICell).content.length > (value as ICell).maxLength
            }
          />
        </td>
      )}
    </>
  )
}

export default Cell
