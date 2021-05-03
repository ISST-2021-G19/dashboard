import React from 'react'
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native'
import styled from 'styled-components/native'

export interface ActivityIndicatorProps extends RNActivityIndicatorProps {}

const SRNActivityIndicator = styled.ActivityIndicator`
  flex: 1;
  justify-self: center;
  align-self: center;
`

export function ActivityIndicator(props: ActivityIndicatorProps) {
  return <SRNActivityIndicator color="#1f82c0"{...props} />
}
