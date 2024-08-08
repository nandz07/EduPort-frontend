import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home.jsx'
import Signup from './Pages/Signup.jsx'
import Admin from './Pages/Admin/Admin.jsx'
import Layouts from './layouts/Layouts.jsx'
import AdminLogin from './Pages/Admin/AdminLogin.jsx'
import "react-toastify/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ToastContainer theme='dark' className='mt-20' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
      <Routes>
        <Route path='*' element={<App />} />
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/admin' element={<AdminLogin />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
