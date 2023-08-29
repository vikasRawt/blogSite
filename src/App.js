import React from 'react';
import './App.css';
import TopBar from './components/topBar/topbar';
// import Home from './components/pages/home/home.jsx';
import SinglePage from './components/pages/singlePage/singlePage';

function App() {
  return (
    <div className="App">
       <TopBar/>
       <SinglePage/>
    </div>
  );
}

export default App;
