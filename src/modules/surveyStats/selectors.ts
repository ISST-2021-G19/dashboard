import { createSelector } from '@reduxjs/toolkit';
import { State as SurveyStatsState } from './reducer'

type State = { surveyStats: SurveyStatsState }

export const surveyStatsStateSelector = (state: State) => state.surveyStats

export const isLoadingSurveyStatsSelector =  createSelector(
  surveyStatsStateSelector,
  state => state.isLoading,
)

export const surveyStatsSelector =  createSelector(
  surveyStatsStateSelector,
  state => state.stats,
)

export const surveyStatsErrorSelector =  createSelector(
  surveyStatsStateSelector,
  state => state.error,
)

export const surveyStatsHookSelector = createSelector(
  isLoadingSurveyStatsSelector,
  surveyStatsSelector,
  surveyStatsErrorSelector,
  (loading, stats, error) =>
    [loading, stats, error] as [typeof loading, typeof stats, typeof error],
)

export const surveyCommentsSelector = createSelector(
  surveyStatsSelector,
  stats => stats?.comments ?? []
)

export const surveySubjectPieChartDatasetSelector = createSelector(
  surveyStatsSelector,
  stats => Object.entries(
    stats?.questions
      .flatMap(q => q.dataset)
      .reduce((acc, [score, count]) => {
        acc[score] = (acc[score] ?? 0) + count
        return acc
     }, {} as Record<string, number>) ?? {}
  ),
)

// FIXME: these two should decide which questions belong to survey and which to professors
export const surveyProfessorPieChartDatasetSelector = surveySubjectPieChartDatasetSelector

export const surveyTraitsSelector = createSelector(
  surveyStatsSelector,
  (stats) => (stats?.traits ?? [])// .sort((tA, tB) => tA.count - tB.count)
)