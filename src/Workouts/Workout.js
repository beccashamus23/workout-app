
const Workout = ({ id, text, handleDeleteWorkout }) => {
	return (
		<div className='form'>
			<span>{text}</span>
			<button onClick={() => handleDeleteWorkout(id)}>delete</button>
		</div>
	);
};

export default Workout;