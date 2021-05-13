import React from 'react'
import { useRoute } from '@react-navigation/core'
import { useSurveyStats } from "../hooks"
import * as S from './SurveyStatsScreen.styles'

export function SurveyStatsScreen() {
  const { params } = useRoute<any>()
  const [loading, stats] = useSurveyStats({
    professorId: params.professorId ?? 'missing_professor_id',
    subjectId: params.subjectId ?? 'missing_subject_id',
  })

  console.log(stats?.questions)
  return (
    <S.Wrapper>
      <S.Header></S.Header>
      <S.SubjectTitle>
        {stats?.subject.name}
      </S.SubjectTitle>
      <S.Container>
        <S.PieChartsContainer>
          <S.PieChartContainer>
            <S.ChartTitle>Profesor</S.ChartTitle>
            <S.ProfessorPieChart />
          </S.PieChartContainer>
          <S.PieChartContainer>
            <S.ChartTitle>Asignatura</S.ChartTitle>
            <S.SubjectPieChart />        
          </S.PieChartContainer>
        </S.PieChartsContainer>
        <S.CommentsAndBarChartsContainer>
          <S.SectionTitle>Preguntas</S.SectionTitle>
          <S.BarChartsContainer>
            {stats?.questions.map(q => (
              <S.BarChartContainer>
                <S.ChartTitle>{q.questionId}</S.ChartTitle>
                <S.BarChart key={q.questionId} dataset={q.dataset} />
              </S.BarChartContainer>
            ))}
          </S.BarChartsContainer>
          <S.SectionTitle>Atributos elegidos por los alumnos</S.SectionTitle>
          <S.Traits />
          <S.SectionTitle>Comentarios</S.SectionTitle>
          <S.Comments />
        </S.CommentsAndBarChartsContainer>
      </S.Container>
    </S.Wrapper>
  )
}