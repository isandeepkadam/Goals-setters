import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import Edit from './Edit';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);

  return (
    <div className="goal">
      {edit ? (
        <Edit goal={goal} />
      ) : (
        <>
          <button className="close" onClick={() => setEdit(true)}>
            pencil
          </button>
          <div>{new Date(goal.createdAt).toLocaleString('en-in')}</div>
          <h2>{goal.text}</h2>
          <button
            className="close"
            onClick={() => dispatch(deleteGoal(goal._id))}
          >
            X
          </button>
        </>
      )}
    </div>
  );
};

export default GoalItem;
