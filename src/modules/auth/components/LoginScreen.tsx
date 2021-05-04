import React, { useCallback, useState } from 'react'
import { ViewProps } from 'react-native'
import { useDispatch } from 'react-redux'
import { login } from '../actions'
import * as S from './LoginScreen.styles'

interface LoginScreenProps extends ViewProps {}

function LoginScreen(props: LoginScreenProps) {
  const [email, setEmail] = useState('test@alumnos.upm.es')
  const [password, setPassword] = useState('test123')
  const dispatch = useDispatch()
  const simulateLogin = useCallback(async () => {
    await dispatch(login({ email, password }))
  }, [email, password])

  return (
    <S.Container {...props}>
      <S.LoginBox>
        <S.Logo />
        <S.Field
          label="Email"
          inputProps={{ value: email, onChangeText: setEmail }}
        />
        <S.Field
          label="Password"
          renderInput={() => <S.PasswordInput value={password} onChangeText={setPassword} />}
        />
        <S.Button onPress={simulateLogin}>Login</S.Button>
      </S.LoginBox>
    </S.Container>
  )
}

export default LoginScreen
export { LoginScreen }
export type { LoginScreenProps as LoginProps }