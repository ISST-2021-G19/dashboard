import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./actions";
import { authenticatedUserSelector } from "./selectors";

function useAuthenticatedUser() {
  const dispatch = useDispatch()
  const user = useSelector(authenticatedUserSelector)
  const initialLoadDone = useSelector(authenticatedUserSelector)

  useEffect(() => {
    if (!initialLoadDone) {
      // FIXME: We should do an actual attept at reusing the existing credentials
      dispatch(login({ email: '', password: '' }))
    }
  }, [initialLoadDone, dispatch])

  return user
}

export { useAuthenticatedUser }