import React, { ComponentProps } from 'react'
import type { ViewProps } from 'react-native'
import * as S from './Logo.styles'

export interface LogoProps extends ViewProps {
}

export function Logo(props: LogoProps) {
  return (
    <S.Container {...props}>
      <S.eDocImage style={{ width: '100%', height: '100%' }} />
    </S.Container>
  )
}
