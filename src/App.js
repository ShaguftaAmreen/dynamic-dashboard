import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import './styles.css';
import './App.css'
const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> <span style={{color:"red"}}>Dyn</span>< span style={{color:"green"}}>aimc</span>   <span style={{color:"yellow"}}>  Dash</span><span style={{color:"blue"}}>board</span></h1>
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
