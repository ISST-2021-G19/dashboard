import styled from 'styled-components/native'
import { DegreeSelector } from './DegreeSelector'
import { Header as BaseHeader } from './Header'
import { SubjectList } from './SubjectList';
import { YearSelector } from './YearSelector';

export const Container = styled.ScrollView`
  padding: 16px;
`

export const Content = styled.View`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`

export const ContentLayout = styled.View`
  display: flex;
  flex-direction: row;
`
export const LeftPanel = styled.ScrollView`
  flex: 1 0 auto;
  width: 0.2vw;
  padding: 8px;
`
export const CenterPanel = styled.ScrollView`
  flex: 1 1 auto;
  padding: 8px;
`
export const RightPanel = styled.ScrollView`
  flex: 1 0 auto;
  width: 0.2vw;
  padding: 8px;
`

export const Degrees = styled(DegreeSelector)`
  margin-bottom: 16px;
`

export const Years = styled(YearSelector)`
  margin-top: 24px;
`

export const Header = styled(BaseHeader)`
  margin-bottom: 16px;
`

export const List = styled(SubjectList)``
