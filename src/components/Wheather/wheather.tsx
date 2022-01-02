import React from 'react'
import styles from './wheather.module.css'
import moment from 'moment'

const DEFAULT_IMAGE = '/wheather/default_wheather.png'

const Wheather = () => {
    
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