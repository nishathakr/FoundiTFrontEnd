import './App.css';

import Index from './Components/index.jsx';
import Login from './Components/login.js'
import './'


import { BrowserRouter, Route,Routes } from 'react-router-dom';
import index from './Components/index.jsx';
import Register from './Register';
import ForgotPassword from './Components/forgotpassword.js';
import Otp from './Components/otp';
// import Routes from './Routes'; 
function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='login'element={<Login/>}/>
  <Route path='index'element={<Index/>}/>
  <Route path='register'element={<Register/>}/>
  <Route path='forgotpassword'element={<ForgotPassword/>}/>
  <Route path='otp'element={<Otp/>}/>




   <Route path=''element={<Index/>}/>
     

</Routes>

</BrowserRouter>

    {/* <Index/>
    <Login/> */}
    
    </>
  );
}

export default App;
