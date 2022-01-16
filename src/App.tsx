import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { PublicRoutes } from './routes';
import { GoogleImageType } from './types/googleImage'

function App(googleImage : GoogleImageType ) {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoutes googleImage={googleImage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
