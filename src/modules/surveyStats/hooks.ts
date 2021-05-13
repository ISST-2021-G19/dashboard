import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSurveyStats } from './actions';
import { surveyStatsHookSelector } from './selectors';

function useSurveyStats(params: { subjectId: string, professorId: string }) {
  const dispatch = useDispatch()
  const [loading, stats, error] =  useSelector(surveyStatsHookSelector)

  useEffect(() => {
    dispatch(fetchSurveyStats({
      professorId: params.professorId,
      subjectId: params.subjectId,
    }))
  }, [dispatch, params.subjectId, params.professorId])

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return [loading, stats] as [typeof loading, typeof stats]
}

export { useSurveyStats }
