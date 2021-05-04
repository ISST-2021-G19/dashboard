import React, { useMemo, useState } from 'react'
import { ImageProps } from 'react-native'
import { useAuthenticatedUser } from '../../hooks'
import * as S from './AuthenticatedUserAvatar.styles'

interface AuthenticatedUserAvatarProps extends Omit<ImageProps, 'source'> {}

function AuthenticatedUserAvatar(props: AuthenticatedUserAvatarProps) {
  const user = useAuthenticatedUser()
  const [hasError, toggleHasError] = useState(false)
  const source = useMemo(() => {
    if (hasError) {
      return require('./FallbackAvatar.png')  
    }

    if (user?.avatar) {
      return { uri: user.avatar}
    }

    return require('./FallbackAvatar.png')
  }, [user, hasError])

  return (
    <S.Avatar
      {...props}
      source={source}
      onError={() => toggleHasError(true)}
    />
)
}

export default AuthenticatedUserAvatar
export { AuthenticatedUserAvatar }
export type { AuthenticatedUserAvatarProps }