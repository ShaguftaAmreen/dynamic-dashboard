import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions';

const Widget = ({ categoryId, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>× Remove Widget</button>
    </div>
  );
};

export default Widget;
