import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Wheather from './service/wheather'
import axios from 'axios';
import GoogleImage from './service/getImages';

// const wheather = new Wheather()
// const getWeather = wheather.getWheather

const httpclient = axios.create({
    baseURL: 'https://www.googleapis.com/customsearch/v1',
    params: {
       key: process.env.GOOGLE_IMAGE_API_KEY,
       cx: process.env.GOOGLE_SEARCH_API_ID,
    }
})

const googleImage = new GoogleImage(httpclient)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

