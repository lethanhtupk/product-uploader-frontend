import React from 'react'
import Icon from '~/components/elements/Icon'
import PaginationItem from './PaginationItem'

interface Props {
  currentPage: number
  totalPage: number
  limitDisplay?: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const getDisplayPages = (currentPage: number, totalPage: number, limitDisplay?: number): number[] => {
  if (currentPage - limitDisplay <= 1) {
    return limitDisplay + 2 > totalPage
      ? Array.from({ length: totalPage }, (_, i) => i + 1)
      : [...Array.from({ length: limitDisplay + 2 }, (_, i) => i + 1), 10]
  } else if (currentPage + limitDisplay >= totalPage) {
    return [1, ...Array.from({ length: limitDisplay + 2 }, (_, i) => totalPage - limitDisplay - 1 + i)]
  } else {
    return [1, currentPage - 1, currentPage, currentPage + 1, totalPage]
  }
}

const Pagination = ({ currentPage = 1, totalPage, limitDisplay = 3, setCurrentPage }: Props) => {
  // make sure the array is increase order.
  const displayPages = getDisplayPages(currentPage, totalPage, limitDisplay).sort((a, b) => a - b)
  return (
    <div className="flex flex-row">
      <PaginationItem
        value={<Icon name="doubleChevronLeft" style="w-4 h-4" />}
        nextValue={1}
        setCurrentPage={setCurrentPage}
      />
      <PaginationItem
        value={<Icon name="chevronLeft" style="w-4 h-4" />}
        nextValue={currentPage - 1}
        setCurrentPage={setCurrentPage}
      />

      {displayPages.map((page) => {
        if (page === 1 && !displayPages.includes(2)) {
          return (
            <>
              <PaginationItem
                key={page}
                value={page}
                nextValue={page}
                isActive={currentPage === page}
                setCurrentPage={setCurrentPage}
              />
              <PaginationItem key={`${page}_dots`} shouldShowValue={false} />
            </>
          )
        } else if (page === totalPage && !displayPages.includes(totalPage - 1)) {
          return (
            <>
              <PaginationItem key={`${page}_dots`} shouldShowValue={false} />
              <PaginationItem
                key={page}
                value={page}
                nextValue={page}
                isActive={currentPage === page}
                setCurrentPage={setCurrentPage}
              />
            </>
          )
        }
        return (
          <PaginationItem
            key={page}
            value={page}
            nextValue={page}
            isActive={currentPage === page}
            setCurrentPage={setCurrentPage}
          />
        )
      })}

      <PaginationItem
        value={<Icon name="chevronRight" style="w-4 h-4" />}
        nextValue={currentPage + 1}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
      />
      <PaginationItem
        value={<Icon name="doubleChevronRight" style="w-4 h-4" />}
        nextValue={totalPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Pagination
