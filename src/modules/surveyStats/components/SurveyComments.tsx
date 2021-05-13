import React from 'react'
import { ViewProps } from 'react-native';
import { useSelector } from 'react-redux';
import { surveyCommentsSelector } from '../selectors';
import * as S from './SurveyComments.styles'

export interface SurveyCommentsProps extends ViewProps {}

export function SurveyComments(props: SurveyCommentsProps) {
  const comments = useSelector(surveyCommentsSelector)
  return (
    <S.Container {...props}>
      {comments.map((comment, idx) => <S.Comment key={idx}>{comment}</S.Comment>)}
    </S.Container>
  )
}
