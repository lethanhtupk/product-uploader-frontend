import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Button from '~/components/elements/buttons/Button'
import SubmitButton from '~/components/elements/buttons/SubmitButton'
import SelectInput from '~/components/elements/Input/SelectInput'
import TextInput from '~/components/elements/Input/TextInput'
import { IUser, IUserPage } from '~/models/user'
import { queryUsers } from '~/schema/queries/users'
import { debounce, DEFAULT_LIMIT_RECORDS } from '~/utils/commonUtils'
import { FormErrors, ResponseError } from '~/utils/errorUtils'
import { validateRequiredField } from '~/utils/validators'

interface IStoreInput {
  domain_name: string
  consumer_key: string
  secret_key: string
  users: number[] | null
}

const StoreForm = () => {
  const [storeInput, setStoreInput] = useState<IStoreInput>()
  const [searchPattern, setSearchPattern] = useState<string>('')
  const [errors, setErrors] = useState<FormErrors>()

  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ['queryUsers', { searchPattern, currentPage: 1, limit: DEFAULT_LIMIT_RECORDS }],
    queryUsers,
  )

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setStoreInput({ ...storeInput, [name]: value })
  }

  const onSelectInputChange = (newValue: string) => {
    debounce(() => {
      setSearchPattern(newValue)
    })
  }

  const onSelectUsers = (selectedUsers: IUser[]) => {
    const selectedUserIds = selectedUsers.map((user) => user.id)
    setStoreInput({ ...storeInput, users: selectedUserIds })
  }

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submitted')
  }

  const onCancel = () => {
    console.log('canceled')
  }

  return (
    <form className="w-2/5 mt-20" onSubmit={onSubmit}>
      <TextInput
        name="domain_name"
        label="Domain name"
        isRequired={true}
        errors={errors}
        onChange={onInputChange}
        onBlur={() => validateRequiredField('domain_name', storeInput?.domain_name, errors, setErrors)}
      />
      <TextInput
        name="consumer_key"
        label="Consumer key"
        isRequired={true}
        errors={errors}
        onChange={onInputChange}
        onBlur={() => validateRequiredField('consumer_key', storeInput?.consumer_key, errors, setErrors)}
      />
      <TextInput
        name="secret_key"
        label="Secret key"
        isRequired={true}
        errors={errors}
        onChange={onInputChange}
        onBlur={() => validateRequiredField('secret_key', storeInput?.secret_key, errors, setErrors)}
      />
      <SelectInput
        name="users"
        label="Assign for"
        placeholder="Select users..."
        isMulti={true}
        isLoading={isLoading}
        options={isSuccess ? (data as IUserPage).results : []}
        error={isError ? (error as ResponseError) : undefined}
        getOptionLabel={(option) => option.username as string}
        getOptionValue={(option) => option.id as string}
        onChange={onSelectUsers}
        onInputChange={onSelectInputChange}
      />
      <div className="flex justify-center w-full mt-8">
        <Button
          type="button"
          label="Cancel"
          customStyle="bg-red-600 rounded-full text-white px-8 hover:bg-red-400 mr-3"
          onClick={onCancel}
        />
        <SubmitButton type="submit" label="Create" />
      </div>
    </form>
  )
}

export default StoreForm
