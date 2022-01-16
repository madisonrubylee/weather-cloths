import React, { useEffect ,useState } from 'react';
import ImageItem from '../Image/image';
import styles from './imageList.module.css'
// const GoogleImages = require('google-images')

//const client = new GoogleImages(process.env.GOOGLE_SEARCH_API_ID , process.env.GOOGLE_IMAGE_API_KEY)

const ImageList = (props: any)=> {
    const { image } = props
    
    const [imageList, setImageList] = useState([])

    const keyword = `${image} weather cloths pinterest`
    // useEffect(() => {
    //     client.search(keyword)
    //     .then((image: []) => {
    //         console.log(image)
    //         setImageList(image)
    //     })
    //     .catch((error: any) => {
    //         console.log(error)
    //     })
    // }, [])

        // useEffect(() => {
    //     setImage(weatherData?.weather?.[0].main)
    // }, [weatherData])
    
    return (
        <>
          {/* <div className={styles.imageBox}>
              <div className={styles.grid}>
                  <div className={styles.imageList}>
                      <div className={styles.imageWrapper}>
                          {imageList.map(image => (
                              <ImageItem
                                image={image}
                               />
                          ))}
                      </div>
                  </div>
              </div>
          </div> */}
        </>
    )
}

export default ImageList;