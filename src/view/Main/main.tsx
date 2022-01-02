import React from 'react'
import styles from './main.module.css'
import Wheather from '../../components/Wheather/wheather'
import Header from '../../components/Header/header'

const Main = ({}) => {
    
    return (
        <>
         <Header></Header>
         <Wheather></Wheather>
        </>
    )
}

export default Main