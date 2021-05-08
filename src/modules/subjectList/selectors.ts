import { createSelector } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash';
import { State as SubjectListState } from './reducer'

type State = { subjectList: SubjectListState }

const courseListStateSelector = (state: State) => state.subjectList

const isLoadingCourseListSelector =  createSelector(
  courseListStateSelector,
  state => state.isLoading,
)

const courseListSelector =  createSelector(
  courseListStateSelector,
  state => state.courses,
)

const enabledYearsSelector =  createSelector(
  courseListStateSelector,
  state => state.selectedYears,
)

const enabledDegreesSelector =  createSelector(
  courseListStateSelector,
  state => state.selectedDegrees,
)

const degreeListSelector = createSelector(
  courseListSelector,
  enabledDegreesSelector,
  (courses, selectedDegrees) => {
    const selectedDegreesSet = new Set(selectedDegrees)
    return uniqBy(
      courses.map(course => ({
        id: course.degree,
        label: course.degree,
        enabled: selectedDegreesSet.has(course.degree),
      })),
      course => course.id,
    )
  }
)

const yearListSelector = createSelector(
  courseListSelector,
  enabledYearsSelector,
  (courses, selectedYears) => {
    const selectedYearsSet = new Set(selectedYears)
    return uniqBy(
      courses.map(course => ({
        id: String(course.year),
        label: String(course.year),
        enabled: selectedYearsSet.has(String(course.year)),
      })),
      course => course.id,
    )
  }
)

const hasCourseListErrorSelector =  createSelector(
  courseListStateSelector,
  state => Boolean(state.error),
)

const courseListErrorSelector =  createSelector(
  courseListStateSelector,
  state => state.error,
)


const areAllDegreesEnabledSelector = createSelector(
  degreeListSelector,
  degrees =>
    degrees.every(degree => degree.enabled === true) ||
    degrees.every(degree => degree.enabled === false),
)

const areAllYearsEnabledSelector = createSelector(
  yearListSelector,
  years =>
    years.every(year => year.enabled === true) ||
    years.every(year => year.enabled === false),
)

const filteredCourseListSelector = createSelector(
  courseListSelector,
  areAllDegreesEnabledSelector,
  areAllYearsEnabledSelector,
  yearListSelector,
  degreeListSelector,
  (courses, allDegrees, allYears, years, degrees) => {
    const enabledDegrees = Object.fromEntries(degrees.map(degree => [degree.id, allDegrees || degree.enabled]))
    const enabledYears = Object.fromEntries(years.map(year => [year.id, allYears || year.enabled]))

    return courses.filter(course => Boolean(enabledDegrees[course.degree]) && Boolean(enabledYears[course.year]))
  }
)


const courseListHookSelector = createSelector(
  isLoadingCourseListSelector,
  filteredCourseListSelector,
  courseListErrorSelector,
  (loading, courses, error) =>
    [loading, courses, error] as [typeof loading, typeof courses, typeof error],
)

export {
  courseListStateSelector,
  isLoadingCourseListSelector,
  courseListSelector,
  hasCourseListErrorSelector,
  courseListErrorSelector,
  courseListHookSelector,
  degreeListSelector,
  yearListSelector,
  areAllYearsEnabledSelector,
  areAllDegreesEnabledSelector,
  filteredCourseListSelector,
}