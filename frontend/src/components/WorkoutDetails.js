import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import fomatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext()


  const handleClick = async () => {
    if(!user){
      return
    }
    const res = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      }
    })
    const data = await res.json()

    if(res.ok){
      dispatch({type: 'DELETE_WORKOUTS', payload: data})
    }
  }


  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong> {workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{fomatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>Delete</span>
    </div>
  )
}

export default WorkoutDetails
