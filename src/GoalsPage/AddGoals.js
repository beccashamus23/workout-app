import { useState } from 'react';
import { CiSaveDown1 } from "react-icons/ci";


const AddGoals = ({ handleAddGoal }) => {
	const [goalsText, setGoalsText] = useState('');

	const handleChange = (event) => {
			setGoalsText(event.target.value);
	};

	const handleSaveClick = () => {
			handleAddGoal(goalsText);
			setGoalsText('');
	};

	return (
		<div className='add-goal'>
			<textarea
				rows='8'
				cols='10'
				placeholder='my goal...'
				value={goalsText}
				onChange={handleChange}
			></textarea>
			<CiSaveDown1 onClick={handleSaveClick}/>
		</div>
	);
};

export default AddGoals;