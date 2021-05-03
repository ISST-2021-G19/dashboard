import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, PressableProps } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Text } from './Text'

const StyledPressable = styled.Pressable`
  background-color: #1f82c0;
  padding: 8px;
  align-items: center;
  border-radius: 4px;
  ${props => props.disabled && css`opacity: 0.38;`};
`

const ButtonText = styled(Text)`
  color: white;
`

export interface ButtonProps extends PressableProps {}

export function Button(props: ButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const toggleIsLoadingRef = useRef(setIsLoading)
  const toggleIsLoading = toggleIsLoadingRef.current
  useEffect(() => () => { toggleIsLoadingRef.current = () => null }, [])

  const handlePress = useCallback<NonNullable<ButtonProps['onPress']>> (async (event) => {
    try {
      toggleIsLoading(true)
      await Promise.resolve(props.onPress?.(event))
    } finally {
      toggleIsLoading(false)
    }
  }, [toggleIsLoading, props.onPress])
  
  return (
    <StyledPressable {...props} onPress={isLoading ? null : handlePress}>
      {
        isLoading
        ? <ActivityIndicator color="white" />
        : typeof props.children === 'string'
          ? <ButtonText>{props.children}</ButtonText>
          : props.children
      }
    </StyledPressable>
  )
}