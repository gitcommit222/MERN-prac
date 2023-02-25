import { useAuthContext } from './useAuthContext'
import { useWorkoutContext } from './useWorkoutsContext'
const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutContext()
    
    const logout = () =>{
        // remove user from local storage
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

  return {logout}
}

export default useLogout
