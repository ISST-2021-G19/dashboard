import React from 'react'
import { ViewProps } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAllYears, toggleYear } from '../actions'
import { yearListSelector, areAllYearsEnabledSelector } from '../selectors'
import * as S from './YearSelector.styles'

interface YearSelectorProps extends ViewProps {}

function YearSelector(props: YearSelectorProps) {
  const years = useSelector(yearListSelector)
  const dispatch = useDispatch()
  const areAllYearsEnabled = useSelector(areAllYearsEnabledSelector)

  return (
    <S.Container {...props}>
      {years.map(year => (
        <S.Pressable key={year.id} onPress={() => dispatch(toggleYear(year.id))}>
          <S.YearPill enabled={year.enabled}>
            <S.YearName enabled={year.enabled}>
              {year.label}
            </S.YearName>
          </S.YearPill>
        </S.Pressable>
      ))}
      <S.Pressable onPress={() => dispatch(toggleAllYears())}>
        <S.YearPill enabled={areAllYearsEnabled}>
          <S.YearName enabled={areAllYearsEnabled}>
            Todos
          </S.YearName>
        </S.YearPill>
      </S.Pressable>
    </S.Container>
  )
}

export default YearSelector
export { YearSelector }
export type { YearSelectorProps }