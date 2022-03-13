import React from 'react'
import { useTable } from 'react-table'
import LoadingIndicator from '~/components/elements/LoadingIndicator'

interface IColumn {
  Header: string
  accessor: string
}

interface Props {
  columns: IColumn[]
  data: Record<string, unknown>[]
  isLoading: boolean
}

const DataTable = ({ columns, data, isLoading }: Props) => {
  const tableInstance = useTable({ columns, data })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <div {...getTableProps()} className="w-4/5 mt-32 ml-14 bg-white">
      {headerGroups.map((headerGroup, index) => (
        <div
          key={index}
          {...headerGroup.getHeaderGroupProps()}
          className="flex flex-row justify-evenly py-3 border-b border-gray-200"
        >
          {headerGroup.headers.map((column, index) => (
            <div key={index} {...column.getHeaderProps()} className="text-center w-full text-sm text-gray-600">
              {column.render('Header')}
            </div>
          ))}
        </div>
      ))}
      <div {...getTableBodyProps()} className="bg-white min-h-600px">
        {isLoading ? (
          <div className="flex flex-row h-full justify-center items-center">
            <LoadingIndicator positionStyle="relative mt-10" options={{ width: '40', height: '40' }} />
          </div>
        ) : (
          <>
            {rows.length === 0 && (
              <div className="bg-white flex flex-row items-center min-h-[75px] border-b border-gray-200">
                <p className="px-4 italic">No records found</p>
              </div>
            )}
            {rows.map((row, index) => {
              prepareRow(row)
              return (
                <div
                  key={index}
                  {...row.getRowProps()}
                  className="bg-white justify-evenly flex flex-row min-h-[75px] items-center border-b border-gray-200"
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <div key={index} {...cell.getCellProps()} className="w-full text-center">
                        {cell.render('Cell')}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default DataTable
