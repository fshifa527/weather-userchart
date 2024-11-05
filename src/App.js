import './App.css'
import './bootstrap.min.css'
import React, { useRef } from 'react';
import UserList from './components/UserList';
import WeatherChart from './components/WeatherChart';
import PDFExport from './components/PDFExport';

const App = () => {
  const userTableRef = useRef(null);
  const weatherChartRef = useRef(null);

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <div ref={userTableRef}>
        <h2>User List</h2>
        <UserList />
      </div>
      <div ref={weatherChartRef}>
        <h2>Weather Trends</h2>
        <WeatherChart city="London" />
      </div>
      <PDFExport userTableRef={userTableRef} weatherChartRef={weatherChartRef} />
    </div>
  );
};

export default App;

