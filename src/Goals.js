import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import GoalsList from './Goals/GoalList';
import { Link } from 'react-router-dom';

const Goals = () => {
	const [goals, setGoals] = useState([
	]);

	useEffect(() => {
		const savedGoals = JSON.parse(
			localStorage.getItem('react-goals-app-data')
		);

		if (savedGoals) {
			setGoals(savedGoals);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-goals-app-data',
			JSON.stringify(goals)
		);
	}, [goals]);

	const addGoal = (text) => {
		const newGoal = {
			id: nanoid(),
			text: text,
			completed: false,
		};
		const newGoals = [...goals, newGoal];
		setGoals(newGoals);
	};

	const deleteGoal = (id) => {
		const newGoals = goals.filter((goal) => goal.id !== id);
		setGoals(newGoals);
	};
	const completeGoal = (id) => {
		const updatedGoals = goals.map((goal) => goal.id === id?
		{
			...goal, completed: !goal.completed } : goal
		)
		setGoals(updatedGoals);
	}

	return (
		<div>
			<Link to="/">
                <button className="loginButton">Home</button>
            </Link>
			<GoalsList
				goals={goals}
				handleAddGoal={addGoal}
				handleDeleteGoal={deleteGoal}
				handleCompleteGoal={completeGoal}
			/>
		</div>
	);
};

export default Goals;