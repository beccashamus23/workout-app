import './WorkoutPage/workouts.css';
import React, { useState } from 'react';
import axios from 'axios';
import Videos from './WorkoutPage/Videos';
import { RadioGroup } from '@material-ui/core';

const ExerciseList = ({ muscle }) => {
  const [exercises, setExercises] = useState([]);
  
  const fetchExercises = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        headers: {
          'X-Api-Key': 'gqAGO73SPb+WJJJS9D5aBA==K6oBl0QYpRdcVA9g', // Replace with your actual API key
          'Content-Type': 'application/json',
        },
      });
      setExercises(response.data);
    } catch (error) {
        console.error('Error fetching exercises:', error);
      
    }
  };

  return (
    <div className="workout-results">
      <button className="customButton" onClick={fetchExercises}>Show Exercises</button>
      <ul className = "workout-list">
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage of ExerciseList in another component
const Workouts = () => {
    const [userMuscle, setUserMuscle] = useState(null);
    const handleButtonChange = (value) => {
        setUserMuscle(value);
    
    }
    // <input
    //     id="userMuscle"
    //     placeholder="Enter muscle"
    //     value={userMuscle}
    //     onChange={handleInputChange}
    //   />

  const muscleGroups = [
    'abdominals',
    'abductors',
    'adductors',
    'biceps',
    'calves',
    'chest',
    'forearms',
    'glutes',
    'hamstrings',
    'lats',
    'lower_back',
    'middle_back',
    'neck',
    'quadriceps',
    'traps',
    'triceps',
  ];

  const MuscleRadioButtons = ({muscles, handleButtonChange}) => {
    return (
        <div className = "radioButtons">
            {muscles.map((muscle) => 
            <div key = {muscle}>
                <label>{muscle}
                <input className = "button-style"
                type="radio"
                name="muscle"
                value={muscle}
                onChange={() => handleButtonChange(muscle)}
            /></label>

            </div>)}
        </div>
    )
  }
  return (
    <div>
      <h1>Workouts</h1>
      <div className = "workouts-page">
        <MuscleRadioButtons className = "radioButtons" muscles={muscleGroups} handleButtonChange={handleButtonChange} />
        <ExerciseList muscle={userMuscle} />
        <Videos />
        </div>
    </div>
    
  );
};

export default Workouts;
