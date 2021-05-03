import React, { ReactNode } from 'react'
import type { ViewProps } from 'react-native'
import type { TextInputProps } from 'edoc/components/TextInput'
import * as S from './Field.styles'

export interface FieldProps extends ViewProps {
  label: ReactNode
  inputProps?: TextInputProps
  renderInput?: () => ReactNode
}

export function Field(props: FieldProps) {
  const { label, inputProps, renderInput, ...otherProps } = props

  return (
    <S.Container {...otherProps}>
      <S.Label>{props.label}</S.Label>
      {renderInput?.() ?? <S.Input {...inputProps} />}
    </S.Container>
  )
}
