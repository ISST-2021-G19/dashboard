import { createSelector } from '@reduxjs/toolkit';
import { State as SubjectListState } from './reducer'

type State = { auth: SubjectListState }

const authStateSelector = (state: State) => state.auth

const isInitialLoadDoneSelector =  createSelector(
  authStateSelector,
  state => state.initialLoadDone,
)

const authenticatedUserSelector =  createSelector(
  authStateSelector,
  state => state.user,
)

const requiresLoginSelector = createSelector(
  isInitialLoadDoneSelector,
  authenticatedUserSelector,
  (initialLoadDone, authenticatedUserSelector) => initialLoadDone && Boolean(authenticatedUserSelector)
)

export {
  isInitialLoadDoneSelector,
  authenticatedUserSelector,
  requiresLoginSelector,
}