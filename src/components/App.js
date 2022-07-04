import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './../context/UserContext';

import Login from './Login';
import Register from './Register'
import Transactions from './Transactions';
import Inputs from './Inputs';
import Outputs from './Outputs';


export default function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/sign-in' element={<Login />} />
                    <Route path='/sign-up' element={<Register />} />
                    <Route path='/transactions' element={<Transactions />} />
                    <Route path='/transactions/inputs' element={<Inputs />} />
                    <Route path='/transactions/outputs' element={<Outputs />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}