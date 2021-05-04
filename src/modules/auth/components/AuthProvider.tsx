import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { ActivityIndicator } from 'edoc/components'
import { useAuthenticatedUser } from '../hooks'
import { isInitialLoadDoneSelector } from '../selectors'
import LoginScreen from './LoginScreen'

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider(props: AuthProviderProps) {
  const user = useAuthenticatedUser()
  const initialLoadDone = useSelector(isInitialLoadDoneSelector)

  if (!initialLoadDone) {
    return <ActivityIndicator />
  }

  if (!user) {
    return <LoginScreen />
  }

  return <>{props.children}</>
}

export { AuthProvider }
export type { AuthProviderProps }