import React, { useState, useMemo } from 'react'
import { useQuery } from 'react-query'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import DataTable from '~/components/widgets/DataTable'
import { queryStores } from '~/schema/queries/stores'
import { ResponseError } from '~/utils/errorUtils'

const StoreList = () => {
  const [searchPattern, setSearchPattern] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(10)
  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ['query-stores', { searchPattern, currentPage, limit }],
    queryStores,
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Domain name',
        accessor: 'domain_name', // accessor is the "key" in the data
      },
      {
        Header: 'Consumer key',
        accessor: 'consumer_key',
      },
      {
        Header: 'Secret key',
        accessor: 'secret_key',
      },
      {
        Header: 'WP username',
        accessor: 'wp_username',
      },
      {
        Header: 'WP password',
        accessor: 'wp_password',
      },
      {
        Header: 'Users',
        accessor: 'users',
      },
      {
        Header: '',
        accessor: 'actions',
      },
    ],
    [],
  )

  return (
    <>
      {isLoading ? (
        <LoadingIndicator positionStyle="center-content" />
      ) : isSuccess ? (
        <DataTable columns={columns} data={[]} isLoading={isLoading} />
      ) : (
        <p>{(error as ResponseError).errors.detail}</p>
      )}
    </>
  )
}

export default StoreList
