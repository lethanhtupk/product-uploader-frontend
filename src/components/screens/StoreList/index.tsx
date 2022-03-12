import React, { useState } from 'react'
import { useQuery } from 'react-query'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
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

  return (
    <>
      {isLoading ? (
        <LoadingIndicator positionStyle="center-content" />
      ) : isSuccess ? (
        <div className="mt-20 overflow-x-auto">
          <div className="px-4"></div>
        </div>
      ) : (
        <p>{(error as ResponseError).errors.detail}</p>
      )}
    </>
  )
}

export default StoreList
