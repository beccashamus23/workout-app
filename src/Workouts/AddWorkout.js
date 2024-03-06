import { useState } from 'react';

const AddWorkout = ({ handleAddWorkout }) => {
	const [workoutText, setWorkoutText] = useState('');

	const handleChange = (event) => {
			setWorkoutText(event.target.value);
	};

	const handleSaveClick = () => {
			handleAddWorkout(workoutText);
			setWorkoutText('');
	};

	return (
		<div className='add-workout'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a workout...'
				value={workoutText}
				onChange={handleChange}
			></textarea>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
		</div>
	);
};

export default AddWorkout;