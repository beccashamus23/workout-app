import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import WorkoutsList from './Workouts/WorkoutList';
import Workout from './Workouts/Workout';
import AddWorkout from './Workouts/AddWorkout';

const Workouts = () => {
	const [workouts, setWorkouts] = useState([
		{
			id: nanoid(),
			text: 'This is my first workout!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second workout!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third workout!',
			date: '28/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my new workout!',
			date: '30/04/2021',
		},
	]);


	useEffect(() => {
		const savedWorkouts = JSON.parse(
			localStorage.getItem('react-workouts-app-data')
		);

		if (savedWorkouts) {
			setWorkouts(savedWorkouts);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-workouts-app-data',
			JSON.stringify(workouts)
		);
	}, [workouts]);

	const addWorkout = (text) => {
		const newWorkout = {
			id: nanoid(),
			text: text,
		};
		const newWorkouts = [...workouts, newWorkout];
		setWorkouts(newWorkouts);
	};

	const deleteWorkout = (id) => {
		const newWorkouts = workouts.filter((workout) => workout.id !== id);
		setWorkouts(newWorkouts);
	};

	return (
		<div>
				<WorkoutsList
					workouts={workouts}
					handleAddWorkout={addWorkout}
					handleDeleteWorkout={deleteWorkout}
				/>
		</div>
	);
};

export default Workouts;