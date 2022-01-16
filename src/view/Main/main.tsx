import React, { useEffect, useState } from 'react'
import styles from './main.module.css'
import Weather from '../../components/Weather/weather'
import Header from '../../components/Header/header'
import { GoogleImageType } from '../../types/googleImage'

// const wheatherData = wheatherApi.getWheather()
import axios from 'axios';
import GoogleImage from '../../service/getImages'
import ImageList from '../../components/ImageList/imageList'

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

const Main = () => {
    
    const [weatherData, setWeatherData] = useState({} as any)
    // const [image, setImage] = useState('')

    // useEffect(() => {
    //     weatherApi.getWheather().then(result => setWeatherData(result))
    // }, [])

    // useEffect(() => {
    //     setImage(weatherData?.weather?.[0].main)
    // }, [weatherData])

    return (
        <>
         <Header></Header>
         <Weather weather={weatherData}></Weather>
         <ImageList weather={weatherData} googleImage={googleImage}></ImageList>
        </>
    )
}

export default Main