import { Route, Routes } from 'react-router-dom'
import Main from '../view/Main/main'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}/>
        </Routes>
    )
}

export default PublicRoutes