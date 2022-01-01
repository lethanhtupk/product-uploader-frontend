import React from 'react'
import Cell from '~/components/Cell'
import DataTablePagination from '../DataTablePagination'
import { ICell } from '~/utils/dataTableUtils'

interface Props {
  headings: { label: string; key: string }[]
  rows: ICell[][]
  total: number
  limit: number
  currentPage: number
  totalPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setLimit: React.Dispatch<React.SetStateAction<number>>
}

const renderHeadings = (headings: { label: string; key: string }[]) => {
  return (
    <tr className="text-left">
      {headings.map((heading) => (
        <Cell key={heading.key} isHeading={true} value={heading.label} />
      ))}
    </tr>
  )
}

const DataTable = ({ headings, rows, total, limit, currentPage, totalPage, setLimit, setCurrentPage }: Props) => {
  return (
    <>
      <table className="mx-2 mb-10 filter drop-shadow-lg">
        <thead>{renderHeadings(headings)}</thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-left bg-white">
              {row.map((cell, index) => (
                <Cell key={index} value={cell} isHeading={false} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <DataTablePagination
        count={rows.length}
        total={total}
        limit={limit}
        currentPage={currentPage}
        totalPage={totalPage}
        setLimit={setLimit}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}

export default DataTable
