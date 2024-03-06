import Goal from './Goal';
import AddGoal from './AddGoals';

const GoalList = ({
	goals,
	handleAddGoal,
	handleDeleteGoal,
	handleCompleteGoal,
}) => {
	return (
		<div className='goals-list'>
			{goals.map((goal) => (
				<Goal
					id={goal.id}
					text={goal.text}
					date={goal.date}
					handleDeleteGoal={handleDeleteGoal}
					handleCompleteGoal={handleCompleteGoal}
				/>
			))}
			<AddGoal handleAddGoal={handleAddGoal} />
		</div>
	);
};

export default GoalList;