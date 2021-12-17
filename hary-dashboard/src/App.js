import React from 'react';
import './App.css';
import MenuBar from './components/Menubar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <div className="container-main">
          <Sidebar />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
