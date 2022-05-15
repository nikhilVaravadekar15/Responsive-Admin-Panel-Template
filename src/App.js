import React from 'react'
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/main-dashboard/MainDash';
import RightSideBar from './components/rightSide/RightSideBar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass"> 
        {/* sidebar */}
        <Sidebar />
        {/* MainDash */}
        <MainDash />
        {/* RightSideBar */}
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
