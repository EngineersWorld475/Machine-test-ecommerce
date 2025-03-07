import React from 'react'
import './admin-header.css'

const AdminHeader = () => {
  return (
    <nav class="navbar">
    <form class="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  </nav>
  )
}

export default AdminHeader
