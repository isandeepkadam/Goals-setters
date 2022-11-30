import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

const GoalForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSumbit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(createGoal({ text }));
      setText('');
    }
  };
  return (
    <section className="form">
      <form onSubmit={onSumbit}>
        <div className="form-group">
          <label htmlFor="text">Add goals</label>
          <input
            type="text"
            name="text"
            value={text}
            id="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
