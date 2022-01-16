import axios, { AxiosInstance, AxiosResponse } from 'axios'
//TODO 
// const client = new GoogleImages(process.env.GOOGLE_SEARCH_API_ID , process.env.GOOGLE_IMAGE_API_KEY)

// export const searchImages = (keyword: string) => {
    
//     client.search(keyword)
//             .then((image: any[]) => {
//                 console.log(image)
//             })
//             .catch((error: any) => {
//                 console.log(error)
//             })
// }


class GoogleImage {
    googleImage: AxiosInstance
    
    constructor(httpClient: AxiosInstance) {
        this.googleImage = httpClient;
    }

    async search(query: string) {
        const response = await this.googleImage.get('', {
            params: {
            }

        });
        console.log(response)
       return response.data
}

}

export default GoogleImage;