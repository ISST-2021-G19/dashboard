import { createReducer } from '@reduxjs/toolkit'
import { Profile } from 'edoc/lib/UniAPI'
import { login } from './actions'

interface State {
  initialLoadDone: boolean
  user: Profile | null
}

const initialState: State = {
  initialLoadDone: false,
  user: null,
}

const reducer = createReducer<State>(initialState, builder =>
  builder
  .addCase(login.pending, state => {
    state.user = null
  })
  .addCase(login.fulfilled, (state, action) => {
    state.initialLoadDone = true
    state.user = action.payload
  })
  .addCase(login.rejected, state => {
    state.initialLoadDone = true
    state.user = null
  })
)

export default reducer
export type { State }