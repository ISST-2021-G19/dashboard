import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const eDocImage = styled.Image.attrs({
  source: require('./eDoc.png'),
  resizeMode: 'contain',
})``
