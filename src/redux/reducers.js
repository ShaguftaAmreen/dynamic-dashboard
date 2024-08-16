import { ADD_WIDGET, REMOVE_WIDGET } from './actions';
import dashboardData from '../dashboardData.json';

const initialState = dashboardData;

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? { ...category, widgets: [...category.widgets, action.payload.widget] }
            : category
        )
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
              }
            : category
        )
      };
    default:
      return state;
  }
};

export default dashboardReducer;
