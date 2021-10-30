import React, { useState } from 'react'
import { useQuery } from 'react-query'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import DataTable from '~/components/widgets/DataTable'
import { IUser } from '~/models/user'
import { queryStores } from '~/schema/queries/stores'
import { getTotalPage, IPagination, truncateLongText } from '~/utils/commonUtils'
import { ResponseError } from '~/utils/errorUtils'

const DEFAULT_ACTIONS = ['details', 'edit', 'delete']

const headings = [
  {
    label: 'index',
    key: 'index',
  },
  {
    label: 'domain name',
    key: 'domain_name',
  },
  {
    label: 'users',
    key: 'users',
  },
  {
    label: 'consumer key',
    key: 'consumer_key',
  },
  {
    label: 'secret key',
    key: 'secret_key',
  },
  {
    label: 'actions',
    key: 'actions',
  },
]

const buildListUsername = (users: IUser[]) => {
  return users.reduce((usernames, user, index) => {
    return index === users.length - 1 ? usernames + user.username : usernames + `${user.username}, `
  }, '')
}

const buildDataRows = (headings: { label: string; key: string }[], data: Record<string, unknown>[]) => {
  const rows: string[][] = []
  data.forEach((record, index) => {
    const row: string[] = []
    headings.forEach((heading) => {
      if (heading.key === 'index') {
        row.push((index + 1).toString())
      } else if (heading.key === 'users') {
        row.push(truncateLongText(buildListUsername(record[heading.key] as IUser[])))
      } else if (heading.key === 'actions') {
        row.push(DEFAULT_ACTIONS as any)
      } else {
        row.push(truncateLongText(record[heading.key] as string))
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
        <div className="w-full mt-20">
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
