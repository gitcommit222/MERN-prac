import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {

  const {workouts , dispatch} = useWorkoutContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch('/api/workouts', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        }
      })
      const data = await res.json();

      if(res.ok){
        dispatch({type: 'SET_WORKOUTS', payload: data})
      }
    }
    if(user){
        fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
