import styled, { css } from 'styled-components/native'
import { Header as H } from './Header'
import { SurveyComments } from './SurveyComments'
import { SubjectSurveyPieChart } from './SubjectSurveyPieChart'
import { ProfessorSurveyPieChart } from './ProfessorSurveyPieChart'
import { SurveyBarChart } from './SurveyBarChart'
import { SurveyTraits } from './SurveyTraits'

export const Wrapper = styled.ScrollView`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
`

export const Header = styled(H)``

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
`

export const SubjectTitle = styled.Text`
  font-size: 32px;
  font-weight: 500;
  padding: 16px;
`

export const PieChartsContainer = styled.View`
  flex: 1;
`

export const CommentsAndBarChartsContainer = styled.ScrollView`
  flex: 4;
`

export const CommentsContainer = styled.View``

export const BarChartsContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`

export const Comments = styled(SurveyComments)``

export const Traits = styled(SurveyTraits)``

export const ChartTitle = styled.Text`
  flex: 0 0 auto;
`

export const PieChartContainer = styled.View``

export const SubjectPieChart = styled(SubjectSurveyPieChart)`
  width: 300px;
  height: 300px;
`

export const ProfessorPieChart = styled(ProfessorSurveyPieChart)`
  height: 300px;
`

export const BarChartContainer = styled.View`
  flex: 1 1 auto;
  flex-direction: column;
  height: 200px;
  width: calc(33.33% - 16px);
  margin-right: 16px;
`

export const BarChart = styled(SurveyBarChart)`
  flex: 1;
`

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 16px;
`