import React from 'react'
import { useSelector } from "react-redux";
import { surveySubjectPieChartDatasetSelector } from '../selectors';
import { SurveyPieChart, SurveyPieChartProps } from './SurveyPieChart';

export type ProfessorSurveyPieChartProps = Partial<SurveyPieChartProps>

export function ProfessorSurveyPieChart(props: ProfessorSurveyPieChartProps) {
  const dataset = useSelector(surveySubjectPieChartDatasetSelector)
  return (
    <SurveyPieChart {...props} dataset={dataset} />
  )
}
