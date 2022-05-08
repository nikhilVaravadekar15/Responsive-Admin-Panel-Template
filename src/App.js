import React from 'react'
import './App.css';

import Sidebar from './components/sidebar/Sidebar';
import MainDash from './components/main-dashboard/MainDash';


function App() {
  return (
    <div className="App">
      <div className="AppGlass"> 
        {/* sidebar */}
        <Sidebar />
        {/* MainDash */}
        <MainDash />
      </div>
    </div>
  );
}

export default App;
