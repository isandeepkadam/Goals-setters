import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateGoal } from '../features/goals/goalSlice';

const Edit = ({ goal }) => {
  const [text, setText] = useState(goal.text);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateGoal({ id, text, token }));
  };

  return (
    <div className="editBar">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Update Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn" type="submit">
            Update Goal
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
