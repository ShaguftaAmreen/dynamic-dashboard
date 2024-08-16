import React from 'react';
import Widget from './Widget';
import { useDispatch } from 'react-redux';
import { addWidget } from '../redux/actions';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const widgetName = prompt("Enter widget name:");
    const widgetText = prompt("Enter widget text:");

    if (widgetName && widgetText) {
      const newWidget = {
        id: Date.now(), // Generate a unique ID based on timestamp
        name: widgetName,
        text: widgetText
      };
      dispatch(addWidget(category.id, newWidget)); // Dispatch action to add the widget
    }
  };

  return (
    <div className="category">
      <h3>{category.name}</h3>
      <div className="widgets">
        {category.widgets.map(widget => (
          <Widget key={widget.id} categoryId={category.id} widget={widget} />
        ))}
      </div>
      <button onClick={handleAddWidget}>+ Add Widget</button>
    </div>
  );
};

export default Category;
