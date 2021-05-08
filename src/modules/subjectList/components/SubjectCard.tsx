import React from 'react'
import { ViewProps } from 'react-native'
import { Course } from 'edoc/lib/UniAPI'
import * as S from './SubjectCard.styles'

interface SubjectCardProps extends ViewProps {
  course: Course
}

function SubjectCard(props: SubjectCardProps) {
  const { course, ...otherProps } = props
  return (
    <S.Container {...otherProps}>
      <S.CourseText>{course.name} ({course.code})</S.CourseText>
      <S.DebugText>Grupo: {course.group}</S.DebugText>
    </S.Container>
)
}
export default SubjectCard
export { SubjectCard }
export type { SubjectCardProps }