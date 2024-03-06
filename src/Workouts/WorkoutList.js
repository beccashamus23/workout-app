import Workout from './Workout';
import AddWorkout from './AddWorkout';

const WorkoutsList = ({
	workouts,
	handleAddWorkout,
	handleDeleteWorkout,
}) => {
	return (
		<div className='workouts-list'>
			{workouts.map((workout) => (
				<Workout
					id={workout.id}
					text={workout.text}
					date={workout.date}
					handleDeleteWorkout={handleDeleteWorkout}
				/>
			))}
			<AddWorkout handleAddWorkout={handleAddWorkout} />
		</div>
	);
};

export default WorkoutsList;