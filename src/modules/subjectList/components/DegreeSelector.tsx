import React from 'react'
import { ViewProps } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllDegrees, toggleDegree } from '../actions'
import { degreeListSelector, areAllDegreesEnabledSelector } from '../selectors'
import * as S from './DegreeSelector.styles'

interface DegreeSelectorProps extends ViewProps {}

function DegreeSelector(props: DegreeSelectorProps) {
  const degrees = useSelector(degreeListSelector)
  const dispatch = useDispatch()
  const areAllDegreesEnabled = useSelector(areAllDegreesEnabledSelector)

  return (
    <S.Container {...props}>
      {degrees.map(degree => (
        <S.Pressable key={degree.id} onPress={() => dispatch(toggleDegree(degree.id))}>
          <S.DegreePill enabled={degree.enabled}>
            <S.DegreeName enabled={degree.enabled}>
              {degree.label}
            </S.DegreeName>
          </S.DegreePill>
        </S.Pressable>
      ))}
      <S.Pressable onPress={() => dispatch(toggleAllDegrees())}>
        <S.DegreePill enabled={areAllDegreesEnabled}>
          <S.DegreeName enabled={areAllDegreesEnabled}>
            Todos
          </S.DegreeName>
        </S.DegreePill>
      </S.Pressable>
    </S.Container>
  )
}

export default DegreeSelector
export { DegreeSelector }
export type { DegreeSelectorProps }