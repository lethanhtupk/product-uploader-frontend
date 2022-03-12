import React, { useMemo } from 'react'
import Icon from '~/components/elements/Icon'
import DataTable from '~/components/widgets/DataTable'
import Notification from '~/components/widgets/Notification'

const RootPage = ({ title }: { title: string }) => {
  const actions = useMemo(() => {
    return (
      <div className="flex flex-row">
        <Icon name="detail" style="w-6 h-6 mr-2 cursor-pointer" />
        <Icon name="edit" style="w-6 h-6 mr-2 cursor-pointer" />
        <Icon name="delete" style="w-6 h-6 cursor-pointer" />
      </div>
    )
  }, [])
  const data = useMemo(
    () => [
      {
        domain_name: 'https://store1.com',
        consumer_key: 'xxxxxxxxxxxxxx',
        secret_key: 'yyyyyyyyyyyyyyyy',
        wp_username: 'tult',
        wp_password: 'tult123',
        actions,
      },
      {
        domain_name: 'https://store2.com',
        consumer_key: 'xxxxxxxxxxxxxx',
        secret_key: 'yyyyyyyyyyyyyyyy',
        wp_username: 'tult',
        wp_password: 'tult123',
        actions,
      },
      {
        domain_name: 'https://store3.com',
        consumer_key: 'xxxxxxxxxxxxxx',
        secret_key: 'yyyyyyyyyyyyyyyy',
        wp_username: 'tult',
        wp_password: 'tult123',
        actions,
      },
    ],
    [],
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
      <header>
        <title>{title}</title>
      </header>
      <Notification />
      <div className="main-content">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}

export default RootPage
