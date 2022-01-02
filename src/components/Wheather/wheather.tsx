import React from 'react'
import styles from './wheather.module.css'

const DEFAULT_IMAGE = '/wheather/default_wheather.png'

const Wheather = () => {

    return (
        <>
            <img className={styles.img} src={DEFAULT_IMAGE} alt="wheather" />
        </> 
    )
}

export default Wheather