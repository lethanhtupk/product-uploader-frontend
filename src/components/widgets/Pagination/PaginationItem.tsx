import React from 'react'

const PaginationItem = ({
  value,
  nextValue,
  shouldShowValue = true,
  isActive = false,
  totalPage,
  setCurrentPage,
}: {
  value?: number | JSX.Element
  nextValue?: number
  shouldShowValue?: boolean
  isActive?: boolean
  totalPage?: number
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>
}) => {
  const onChangeCurrentPage = () => {
    if (nextValue < 1 || nextValue > totalPage) {
      return
    }
    setCurrentPage(nextValue)
  }

  return (
    <div
      className={`px-4 py-2 bg-white border border-gray-300 cursor-pointer hover:bg-gray-200 flex flex-row justify-center items-center ${
        isActive ? 'border-purple-500 text-purple-500 bg-gray-200' : ''
      }`}
      onClick={onChangeCurrentPage}
    >
      {shouldShowValue ? value : '...'}
    </div>
  )
}

export default PaginationItem
