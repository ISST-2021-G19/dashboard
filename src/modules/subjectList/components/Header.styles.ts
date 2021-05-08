import styled from 'styled-components/native'
import { Logo as BaseLogo } from 'edoc/components'
import { AuthenticatedUserAvatar } from 'edoc/modules/auth'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled(BaseLogo)`
  width: 75px;
  height: 75px;
`

export const Avatar = styled(AuthenticatedUserAvatar)`
  width: 50px;
  height: 50px;
`
