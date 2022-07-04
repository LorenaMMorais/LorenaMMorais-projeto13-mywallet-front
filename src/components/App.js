import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}