import React from 'react'
import { ViewProps } from 'react-native'
import * as S from './Header.styles'

export interface HeaderProps extends ViewProps {}

export function Header(props: HeaderProps) {
  return (
    <S.Container {...props}>
      <S.Logo />
      <S.Avatar />
    </S.Container>
  )
}
