import React from 'react'
import styles from './main.module.css'
import Weather from '../../components/Weather/weather'
import Header from '../../components/Header/header'
import { GoogleImageType } from '../../types/googleImage'

// const wheatherData = wheatherApi.getWheather()

const Main = (googleImage: GoogleImageType) => {
    
    return (
        <>
         <Header></Header>
         <Weather></Weather>
        </>
    )
}

export default Main