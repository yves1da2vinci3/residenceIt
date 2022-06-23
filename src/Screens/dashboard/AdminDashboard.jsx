import React from 'react'
import DashboardSideBar from './DashboardSideBar'
import UsersTable from './RequestUserTable'
function AdminDashboard() {
  return (
    <div className='flex h-full w-screen'>
<UsersTable />
    </div>
  )
}

export default AdminDashboard