import React from 'react'
import { ViewProps } from "react-native"
import { useSelector } from "react-redux"
import { surveyTraitsSelector } from "../selectors"
import * as S from './SurveyTraits.styles'

export type SurveyTraitsProps = ViewProps

export function SurveyTraits(props: SurveyTraitsProps) {
  const traits = useSelector(surveyTraitsSelector)
  return (
    <S.Container {...props}>
      {traits.map(trait => (
        <S.TraitPill key={trait.traitId}>
          <S.TraitText>{trait.traitLabel}</S.TraitText>
          <S.TraitCount>{trait.count}</S.TraitCount>
        </S.TraitPill>
      ))}
    </S.Container>
  )
}
