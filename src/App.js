import React from 'react';
import MainPageGlobal from './Components/Banniere/MainPageGlobal';
import MainPage from './Components/MainPage/MainPage'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainPageGlobal />
      <MainPage />
    </div>
  );
}

export default App;