import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Pressable = styled.Pressable`
  flex: 1;
`

export const DegreePill = styled.View<{ enabled: boolean }>`
  flex: 1;
  flex-basis: auto;
  display: flex;
  text-align: center;
  cursor: pointer;
  border: 1px solid #1f82c0;
  ${props => props.enabled && css`
    background-color: #1f82c0;
  `}
`

export const DegreeName = styled.Text<{ enabled: boolean }>`
  flex: 1;
  color: #1f82c0;

  ${props => props.enabled && css`
    color: white;
  `}
`

