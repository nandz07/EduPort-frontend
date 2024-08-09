import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layouts from './layouts/Layouts.jsx'
import AdminLogin from './Pages/Admin/AdminLogin.jsx'
import "react-toastify/ReactToastify.css"
import AdminLayout from './layouts/AdminLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <ToastContainer theme='dark' className='mt-20' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} />
      <Routes>
        <Route path='*' element={<Layouts />} />
        <Route path='/admin/*' element={<AdminLayout />} />
        <Route path='/admin' element={<AdminLogin />} />
      </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)
