import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import auth, { State as AuthState } from './modules/auth/reducer'
import subjectList, { State as SubjectListState } from './modules/subjectList/reducer'
import surveyStats, { State as SurveyStatsState } from './modules/surveyStats/reducer'

export interface State {
  auth: AuthState
  subjectList: SubjectListState
  surveyStats: SurveyStatsState
}

export const rootReducer = combineReducers<State>({
  auth,
  subjectList,
  surveyStats,
})

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
})
 