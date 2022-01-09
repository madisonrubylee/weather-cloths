import React from 'react';
import styles from './imageList.module.css'

const ImageList = (props: any)=> {
    const { images } = props

    return (
        <>
          <div className={styles.imageBox}>
              <div className={styles.grid}>
                  <div className={styles.imageList}>
                      <div className={styles.imageWrapper}>
                          
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default ImageList;