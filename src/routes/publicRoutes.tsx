import { Route, Routes } from 'react-router-dom'
import Main from '../view/Main/main'
import { GoogleImageType } from '../types/googleImage'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default PublicRoutes