import React from 'react'
import AdminHeader from '../components/Admin/shared/AdminHeader'
import AdminFooter from '../components/Admin/shared/AdminFooter'
import AdminRoutes from '../routes/AdminRoutes'

function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <main>
        <AdminRoutes/>
      </main>
      <AdminFooter />
    </>
  )
}

export default AdminLayout