import React, { useState } from 'react';
import axios from 'axios';

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
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage of ExerciseList in another component
const Workouts = () => {
  const [userMuscle, setUserMuscle] = useState('');

  const handleInputChange = (event) => {
    setUserMuscle(event.target.value);
  };

  return (
    <div>
      <h1>Workouts</h1>
      <input
        id="userMuscle"
        placeholder="Enter muscle"
        value={userMuscle}
        onChange={handleInputChange}
      />
      <ExerciseList muscle={userMuscle} />
    </div>
  );
};

export default Workouts;
