import { createReducer } from '@reduxjs/toolkit'
import { Course } from 'edoc/lib/UniAPI'
import * as actions from './actions'

interface State {
  isLoading: boolean
  courses: Course[]
  error: string | null
  selectedYears: string[]
  selectedDegrees: string[]
}

const initialState: State = {
  isLoading: false,
  courses: [],
  error: null,
  selectedYears: [],
  selectedDegrees: [],
}

const reducer = createReducer<State>(initialState, builder =>
  builder
  .addCase(actions.fetchCourses.pending, state => {
    state.isLoading = true
  })
  .addCase(actions.fetchCourses.fulfilled, (state, action) => {
    state.isLoading = false
    state.courses = action.payload
    state.error = null
  })
  .addCase(actions.fetchCourses.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.error.message ?? null
  })
  .addCase(actions.toggleYear, (state, action) => {
    const selectedYearsSet = new Set(state.selectedYears)

    if (selectedYearsSet.has(action.payload)) {
      selectedYearsSet.delete(action.payload)
    } else {
      selectedYearsSet.add(action.payload)
    }

    state.selectedYears = Array.from(selectedYearsSet)
  })
  .addCase(actions.toggleDegree, (state, action) => {
    const selectedDegreesSet = new Set(state.selectedDegrees)

    if (selectedDegreesSet.has(action.payload)) {
      selectedDegreesSet.delete(action.payload)
    } else {
      selectedDegreesSet.add(action.payload)
    }

    state.selectedDegrees = Array.from(selectedDegreesSet)
  })
  .addCase(actions.toggleAllYears, (state, action) => {
    state.selectedYears = []
  })
  .addCase(actions.toggleAllDegrees, (state, action) => {
    state.selectedDegrees = []
  })
)

export default reducer
export type { State }