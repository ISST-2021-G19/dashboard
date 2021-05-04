import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Profile } from 'edoc/lib/UniAPI'

interface LoginThunkArg {
  email: string
  password: string
}

const login = createAsyncThunk<Profile, LoginThunkArg>('auth/login', async ({ email, password }) => {
  const profile = await uniApi.login(email, password)
  return profile
})

export { login }
