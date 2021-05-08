import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import uniApi, { Course } from 'edoc/lib/UniAPI'

export const fetchCourses = createAsyncThunk<Course[]>(
  'subjectList/fetchCourses',
  async () => {
    const courses = await uniApi.enrolledCourses()
    return courses
  },
)

export const toggleYear = createAction<string>('subjectList/toggleYear')
export const toggleAllYears = createAction('subjectList/toggleAllYears')
export const toggleDegree = createAction<string>('subjectList/toggleDegree')
export const toggleAllDegrees = createAction('subjectList/toggleAllDegrees')
