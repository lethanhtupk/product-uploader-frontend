import React from 'react'
import { useTable } from 'react-table'

interface IColumn {
  Header: string
  accessor: string
}

interface Props {
  columns: IColumn[]
  data: Record<string, unknown>[]
}

const DataTable = ({ columns, data }: Props) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <div {...getTableProps()} className="w-4/5 mt-32 ml-14">
      {headerGroups.map((headerGroup, index) => (
        <div key={index} {...headerGroup.getHeaderGroupProps()} className="flex flex-row justify-evenly py-3">
          {headerGroup.headers.map((column, index) => (
            <div
              key={index}
              {...column.getHeaderProps()}
              className="uppercase text-left w-full px-2 font-medium text-sm"
            >
              {column.render('Header')}
            </div>
          ))}
        </div>
      ))}
      <div {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <div
              key={index}
              {...row.getRowProps()}
              className="bg-white justify-evenly flex flex-row min-h-[75px] items-center mb-1"
            >
              {row.cells.map((cell, index) => {
                return (
                  <div key={index} {...cell.getCellProps()} className="w-full text-left px-2">
                    {cell.render('Cell')}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DataTable
