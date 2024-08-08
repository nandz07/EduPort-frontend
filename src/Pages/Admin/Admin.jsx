import React from 'react'
import AdminLogin from './AdminLogin'
import Header from '../../components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import AdminDashboard from './AdminDashboard'

function Admin() {
  return (
    <>
      <Header />
      <main>
        <Routes>
        <Route path='/dashboard' element={<AdminDashboard />} />
        </Routes>
          
      </main>
      <Footer />
      </>
  )
}

export default Admin