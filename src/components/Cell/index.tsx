import React from 'react'
import Icon from '~/components/elements/Icon'

interface Props {
  isHeading?: boolean
  customStyle?: string
  value: string
}

const Cell = ({ isHeading, customStyle, value }: Props) => {
  return (
    <>
      {isHeading ? (
        <th
          className={
            customStyle ||
            `bg-gray-200 py-2 text-gray-900 font-medium uppercase px-3 ${
              value === 'index' ? 'text-center' : 'text-left'
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
          className={
            customStyle ||
            `py-3 px-3 border-b border-gray-300  ${!isNaN(Number(value)) ? 'text-center' : 'min-w-100px'}`
          }
        >
          {value}
        </td>
      )}
    </>
  )
}

export default Cell
