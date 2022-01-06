import React, { useEffect, useState } from 'react'
import styles from './wheather.module.css'
import moment from 'moment'
import { WheatherType }  from '../../types/wheather'
import WheatherApi from '../../service/wheather'

const DEFAULT_IMAGE = '/wheather/default_wheather.png'

const wheatherApi = WheatherApi.getInstance()

const Wheather = () => {
    
    const [wheather, setWheather] = useState([])
    
    useEffect(() => {
        wheatherApi.getWheather().then(result => setWheather(result))
    }, [])

    const now = new Date()
    const nowDate = `${moment(now).format(`dddd, D MM YYYY`)}`
    
    return (
        <>
            <p className={styles.nowDate} >{ nowDate }</p>
            <img className={styles.img} src={DEFAULT_IMAGE} alt="wheather" />
        </> 
    )
}

export default Wheather