import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register'
import Transactions from './Transactions';
import Inputs from './Inputs';
import Outputs from './Outputs';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/transactions/inputs' element={<Inputs />} />
                <Route path='/transactions/outputs' element={<Outputs />} />
            </Routes>
        </BrowserRouter>
    );
}