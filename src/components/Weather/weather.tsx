import React, { useEffect, useState } from 'react'
import styles from './weather.module.css'
import moment from 'moment'
//import { WeatherType }  from '../../types/wheather'
import WeatherApi from '../../service/wheather'
// import ImageList from '../ImageList/imageList'


const weatherApi = WeatherApi.getInstance()
let DEFAULT_IMAGE = '/wheather/default_wheather.png' 

const Weather = () => {
    
    // const [weatherData, setWeatherData] = useState({} as any)
    // const [image, setImage] = useState('')

    // useEffect(() => {
    //     weatherApi.getWheather().then(result => setWeatherData(result))
    // }, [])

    // useEffect(() => {
    //     setImage(weatherData?.weather?.[0].main)
    // }, [weatherData])
  
    const now = new Date()
    const nowDate = `${moment(now).format(`dddd, D MM YYYY`)}`

    return (
        <>
            <p className={styles.nowDate} >{ nowDate }</p>
            <img className={styles.img} src={DEFAULT_IMAGE} alt="wheather" />
            {/* <ImageList></ImageList> */}
        </> 
    )
}

function getImage(main: string) {
    switch(main) {
        case 'Thunderstorm' :
            return '/wheather/default_wheather.png'
        case 'Drizzle' :
            return '/wheather/drizzle.png'
        case 'Snow' :
             return '/wheather/snowflake.png'
        case 'Clear' :
             return '/wheather/sun.png'
        case 'Clouds' : 
              return '/wheather/cloud.png'
        default:
              return '/wheather/default_wheather.png'
    }
}

export default Weather