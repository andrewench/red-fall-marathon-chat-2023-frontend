import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FormLayout } from '@/components/layout'

import { TextField } from '@/components/ui'

import { LoginFieldsSchema } from '@/shared/schemes'

import { useConfiguredForm } from '@/shared/hooks'

import styles from './login-form.module.scss'

interface ILoginCredentials {
  login: string
  password: string
}

export const LoginForm: FC = () => {
  const methods = useConfiguredForm<ILoginCredentials>(LoginFieldsSchema)

  const onSubmit: SubmitHandler<ILoginCredentials> = payload => {
    console.log(payload)
  }

  return (
    <FormLayout<ILoginCredentials>
      methods={methods}
      onSubmit={onSubmit}
      className={styles.form}
    >
      <TextField<ILoginCredentials> placeholder="Login" field="login" />
      <TextField<ILoginCredentials>
        placeholder="Password"
        field="password"
        autoComplete="off"
      />

      <button type="submit" className={styles.submit}>
        Sign In
      </button>
    </FormLayout>
  )
}
