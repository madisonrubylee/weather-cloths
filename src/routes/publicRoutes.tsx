import { Route, Routes } from 'react-router-dom'
import Main from '../view/Main/main'
import { GoogleImageType } from '../types/googleImage'

const PublicRoutes = (googleImage : GoogleImageType) => {
    return (
        <Routes>
            <Route path="/" element={<Main googleImage={googleImage}/>}/>
        </Routes>
    )
}

export default PublicRoutes