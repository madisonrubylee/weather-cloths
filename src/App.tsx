import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PublicRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoutes  />
      </BrowserRouter>
    </div>
  );
}

export default App;
