import React from 'react'
import './adminlayout.css'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import {Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <div className='layout_container'>
      {/* Admin sidebar */}
      <AdminSidebar />
      <div className='inner_container'>
        <AdminHeader />
        <main>
            <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
