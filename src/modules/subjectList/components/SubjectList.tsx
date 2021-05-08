import React, { useState } from 'react'
import { Pressable, ViewProps } from 'react-native'
import { ActivityIndicator } from 'edoc/components'
import { Course } from 'edoc/lib/UniAPI'
import { useCourseList } from '../hooks'
import * as S from './SubjectList.styles'

export interface SubjectListProps extends ViewProps {
  onSubjectPress?: (subject: Course) => void
}

export function SubjectList(props: SubjectListProps) {
  const [loading, courses] = useCourseList()
  return (
    <S.Container {...props}>
      {loading
        ? <ActivityIndicator />
        : courses.map(course => (
          <Pressable
            key={course.code}
            onPress={() => props.onSubjectPress?.(course)}>
            <S.Subject course={course} />
          </Pressable>
        ))
    }
  </S.Container>
  )
}
