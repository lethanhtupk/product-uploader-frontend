import React from 'react'
import Pagination from '~/components/widgets/Pagination'

interface Props {
  count: number
  total: number
  limit: number
  currentPage: number
  totalPage: number
  setLimit: React.Dispatch<React.SetStateAction<number>>
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const limitOptions = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '20',
    value: 20,
  },
  { label: '30', value: 30 },
]

const DataTablePagination = ({ count, total, limit, currentPage, totalPage, setCurrentPage }: Props) => {
  if (total < limit) {
    limitOptions.unshift({ label: total.toString(), value: total })
  }

  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-row items-center">
        Showing {count} of {total} records.
      </div>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        setCurrentPage={setCurrentPage}
        hiddenOptions={{ first: true, last: true, dots: true }}
        limitDisplay={2}
      />
    </div>
  )
}

export default DataTablePagination
