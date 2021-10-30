import React, { useState } from 'react'
import SelectInput from '~/components/elements/Input/SelectInput'
import Pagination from '~/components/widgets/Pagination'

interface Props {
  currentPage: number
  totalPage: number
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

const DataTablePagination = ({ currentPage, totalPage, setCurrentPage }: Props) => {
  const [limit, setLimit] = useState(10)

  const onChangeLimit = (event: any) => {
    setLimit(event.target.value)
  }

  return (
    <div className="flex flex-row items-center justify-between w-full px-8">
      <div className="flex flex-row items-center">
        Showing
        <SelectInput
          name="limit"
          label=""
          options={limitOptions}
          inputStyle="px-2 py-1 border-gray-300 border mx-1 bg-white focus:outline-none"
          onChange={onChangeLimit}
        />{' '}
        of 50 records.
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
