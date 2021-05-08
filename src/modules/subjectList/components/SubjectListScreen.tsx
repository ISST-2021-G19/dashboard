import React from 'react'
import { useNavigation } from '@react-navigation/core'
import * as S from './SubjectListScreen.styles'

function SubjectListScreen() {
  const { navigate } = useNavigation()

  return (
    <S.Container>
      <S.Content>
        <S.Header />
        <S.ContentLayout>
          <S.LeftPanel>
            <S.Years />
          </S.LeftPanel>
          <S.CenterPanel>
            <S.Degrees />
            <S.List
              onSubjectPress={subject => navigate('SurveyStats', {
                subjectId: subject.id,
                professorId: '',
              })}
            />
          </S.CenterPanel>
          <S.RightPanel />
        </S.ContentLayout>
      </S.Content>
    </S.Container>
  )
}

export { SubjectListScreen }