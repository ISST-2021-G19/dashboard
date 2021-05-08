import styled from 'styled-components/native'
import { Text } from 'edoc/components'

export const Container = styled.View`
  background-color: #1f82c0;
  padding: 8px;
`

export const DebugText = styled(Text)`
  text-align: center;
  font-weight: bold;
  color: white; 
`

export const CourseText = styled(Text)`
  color: white; 
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: white;
  text-align: center;
`