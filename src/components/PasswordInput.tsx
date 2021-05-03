import styled from 'styled-components/native'
import { TextInput, TextInputProps } from './TextInput'

export type { TextInputProps as PasswordInputProps }
export const PasswordInput = styled(TextInput).attrs({
  secureTextEntry: true,
  autoCompleteType: "password",
  textContentType: "password",
})``
