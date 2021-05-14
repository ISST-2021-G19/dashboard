import React from 'react'
import { useSelector } from "react-redux";
import { surveySubjectPieChartDatasetSelector } from '../selectors';
import { SurveyPieChart, SurveyPieChartProps } from './SurveyPieChart';

export type SubjectSurveyPieChartProps = Partial<SurveyPieChartProps>

export function SubjectSurveyPieChart(props: SubjectSurveyPieChartProps) {
  const dataset = useSelector(surveySubjectPieChartDatasetSelector)
  return (
    <SurveyPieChart {...props} dataset={dataset} />
  )
}
