import { createAsyncThunk } from '@reduxjs/toolkit';
import uniApi from 'edoc/lib/UniAPI'

export const fetchSurveyStats = createAsyncThunk('surveyStats/fetchSurveyStats', 
  async (params: { subjectId: string, professorId: string }) => {
    const { subjectId, professorId } = params
    return await uniApi.surveyStats({ subjectId, professorId })
  },
)
