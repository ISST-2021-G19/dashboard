import { createReducer } from '@reduxjs/toolkit'
import { SurveyStats } from 'edoc/lib/UniAPI'
import * as actions from './actions'

interface State {
  isLoading: boolean
  stats: SurveyStats | null
  error: string | null
}

const initialState: State = {
  isLoading: false,
  stats: null,
  error: null,
}

const reducer = createReducer<State>(initialState, builder =>
  builder
  .addCase(actions.fetchSurveyStats.pending, state => {
    state.isLoading = true
  })
  .addCase(actions.fetchSurveyStats.fulfilled, (state, action) => {
    state.isLoading = false
    state.stats = action.payload
    state.error = null
  })
  .addCase(actions.fetchSurveyStats.rejected, (state, action) => {
    state.isLoading = false
    state.error = action.error.message ?? null
  })
)

export default reducer
export type { State }