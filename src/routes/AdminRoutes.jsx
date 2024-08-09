import React from 'react'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../Pages/NotFound'

function AdminRoutes() {
    return (
        <Routes>
            <Route path='/dashboard' element={<AdminDashboard />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}

export default AdminRoutes