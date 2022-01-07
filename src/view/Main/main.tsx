import React from 'react'
import styles from './main.module.css'
import Weather from '../../components/Weather/weather'
import Header from '../../components/Header/header'

// const wheatherData = wheatherApi.getWheather()

const Main = ({}) => {
    
    return (
        <>
         <Header></Header>
         <Weather></Weather>
        </>
    )
}

export default Main