const GoogleImages = require('google-images')
//TODO 
const client = new GoogleImages('ID', 'API KEY')

export const searchImages = (keyword: string) => {
    client.search(keyword)
            .then((image: any[]) => {
                console.log(image)
            })
            .catch((error: any) => {
                console.log(error)
            })
}

