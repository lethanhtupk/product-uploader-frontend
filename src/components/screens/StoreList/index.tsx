import React, { useState } from 'react'
import { useQuery } from 'react-query'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import DataTable from '~/components/widgets/DataTable'
import { IUser } from '~/models/user'
import { queryStores } from '~/schema/queries/stores'
import { getTotalPage, IPagination } from '~/utils/commonUtils'
import { ICell } from '~/utils/dataTableUtils'
import { ResponseError } from '~/utils/errorUtils'

const DEFAULT_ACTIONS = ['details', 'edit', 'delete']

const headings = [
  {
    label: 'index',
    key: 'index',
    options: {
      shouldTruncate: false,
    },
  },
  {
    label: 'domain name',
    key: 'domain_name',
    options: {
      shouldTruncate: true,
      maxLength: 25,
    },
  },
  {
    label: 'users',
    key: 'users',
    options: {
      shouldTruncate: true,
      maxLength: 20,
    },
  },
  {
    label: 'consumer key',
    key: 'consumer_key',
    options: {
      shouldTruncate: true,
      maxLength: 25,
    },
  },
  {
    label: 'secret key',
    key: 'secret_key',
    options: {
      shouldTruncate: true,
      maxLength: 25,
    },
  },
  {
    label: 'actions',
    key: 'actions',
    options: {
      shouldTruncate: false,
    },
  },
]

const buildListUsername = (users: IUser[]) => {
  return users.reduce((usernames, user, index) => {
    return index === users.length - 1 ? usernames + user.username : usernames + `${user.username}, `
  }, '')
}

const buildDataRows = (headings: { label: string; key: string; options: ICell }[], data: Record<string, unknown>[]) => {
  const rows: ICell[][] = []
  data.forEach((record, index) => {
    const row: ICell[] = []
    headings.forEach((heading) => {
      if (heading.key === 'index') {
        row.push({ content: (index + 1).toString(), ...heading.options })
      } else if (heading.key === 'users') {
        row.push({ content: buildListUsername(record[heading.key] as IUser[]), ...heading.options })
      } else if (heading.key === 'actions') {
        row.push(DEFAULT_ACTIONS as any)
      } else {
        row.push({ content: record[heading.key] as string, ...heading.options })
      }
    })
    rows.push(row)
  })
  return rows
}

const StoreList = () => {
  const [searchPattern, setSearchPattern] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)
  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ['query-stores', { searchPattern, currentPage, limit }],
    queryStores,
  )

  return (
    <>
      {isLoading ? (
        <LoadingIndicator positionStyle="center-content" />
      ) : isSuccess ? (
        <div className="mt-20 overflow-x-auto">
          <div className="px-4">
            <DataTable
              headings={headings}
              rows={buildDataRows(headings, (data as IPagination).results)}
              total={(data as IPagination).count}
              limit={limit}
              currentPage={currentPage}
              totalPage={getTotalPage((data as IPagination).count, limit)}
              setLimit={setLimit}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      ) : (
        <p>{(error as ResponseError).errors.detail}</p>
      )}
    </>
  )
}

export default StoreList
