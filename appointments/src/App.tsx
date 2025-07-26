import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar className="app-nav" />
      <Header className="app-header" />
      <Dashboard className="app-content" />
    </div>
  );
};

export default App;