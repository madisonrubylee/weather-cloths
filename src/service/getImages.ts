const GoogleImages = require('google-images')
//TODO 
const client = new GoogleImages(process.env.GOOGLE_SEARCH_API_ID , process.env.GOOGLE_IMAGE_API_KEY)

export const searchImages = (keyword: string) => {
    
    client.search(keyword)
            .then((image: any[]) => {
                console.log(image)
            })
            .catch((error: any) => {
                console.log(error)
            })
}

