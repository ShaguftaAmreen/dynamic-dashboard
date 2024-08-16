import { createStore } from 'redux';
import dashboardReducer from './reducers';

const store = createStore(dashboardReducer);

export default store;
