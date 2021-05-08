import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './actions';
import { courseListHookSelector } from './selectors';

function useCourseList() {
  const dispatch = useDispatch()
  const [loading, courses, error] =  useSelector(courseListHookSelector)

  useEffect(() => {
    dispatch(fetchCourses())
  }, [dispatch])

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return [loading, courses] as [typeof loading, typeof courses]
}

export { useCourseList }
