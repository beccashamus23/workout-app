
import { TiDeleteOutline } from "react-icons/ti";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";





const Goal = ({ id, text, handleDeleteGoal, handleCompleteGoal }) => {
	return (
		<div className='form'>
			<span>{text}</span>
			<TiDeleteOutline size="20px" onClick={() => handleDeleteGoal(id)}/>
			<FaRegCheckCircle size="16px" onClick={() => handleCompleteGoal(id)}/>
		</div>
	);
};

export default Goal;