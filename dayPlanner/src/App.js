import React from 'react'
import background1 from "./happygirl.jpg";
import background2 from "./nuolitapetti.jpg";
import background3 from "./winterforest.jpg";
import Calendar from "./components/MyCalendar";
import TodoList from './components/TodoList';
import BackgroundSelection from './components/BackgroundSelection';


function App() {
  const h1Style = {
    color: 'black',
    fontSize: 40,
    paddingLeft: 30,
    fontWeight: 'bold',
  }

  const moodTitleStyle = {
  color:'black', 
  fontSize: 30,
  paddingRight: 130, 
  fontWeight: 'bold', 
  textAlign: 'right',
  /*float: 'right'*/
  }

  const listTitleStyle = {
    color:'black', 
    fontSize: 20, 
    fontWeight: 'bold',
    paddingLeft: 30,
    }
  

  return (
    <div className="App" style={{ backgroundImage: `url(${background2})` }}>
      <h1 style={h1Style}>Päivän suunnitelmat</h1>
      <h2 style={moodTitleStyle}>Valitse taustakuva:</h2>
      <BackgroundSelection></BackgroundSelection>
      <Calendar></Calendar>
      <h3 style={listTitleStyle}>notes of the day</h3>
      <TodoList/>
      <h3 style={listTitleStyle}>meal plans</h3>
      <TodoList/>
      <h3 style={listTitleStyle}>shoppings</h3>
      <TodoList/>
    </div>
  );
}

export default App;
