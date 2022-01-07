import HttpClient from './httpClient'
//import { WeatherType } from '../types/weather'

class WheatherApi extends HttpClient {
    // httpClient: AxiosInstance
    private static classInstance?: WheatherApi

    private constructor() {
        super('http://api.openweathermap.org/data/2.5/weather')
    }    

    // async getWheather() {
    //     const response = await fetch (
    //         `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${this.key}`
    //     )
    //     const result = await response.json()
    //     return result.weather
    // }
    
    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new WheatherApi()
        }

        return this.classInstance
    }

    async getWheather () { 
        const response = await this.instance.get(`?id=1835847&appid=${process.env.REACT_APP_WHEATHER_API_KEY}`) 
                                    
        return response
    }
}

export default WheatherApi