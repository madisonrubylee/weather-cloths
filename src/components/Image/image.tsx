import React from 'react';
import styles from './image.module.css'

const ImageItem = ({image} : any) => {

    return (
        <>
            <div className={styles.gridItem}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image}>
                        
                    </img>
                </div>
            </div>
        </>
    )
}

export default ImageItem;