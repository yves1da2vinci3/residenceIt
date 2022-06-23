import React, { useEffect, useState } from 'react'
import AdminUserItem from '../../components/AdminUserItem'
import axios from "axios"
import { SpinnerCircular } from 'spinners-react';
import dns from '../../utils/dns';
function UserScreen() {
  const [loading,SetLoading] = useState(true);
  const [Users,setUsers] = useState()
  const token =  localStorage.getItem("UserToken")

  useEffect(() => {
    SetLoading(true)
   const FetchUsers = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/users`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setUsers(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchUsers()
    },[])
  return (
    <section className="py-8">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-4">
      { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   Users.map(user => (
              <AdminUserItem key={user._id} firstName={user.firstName} lastName={user.lastName} School={user.School} 
              birthDate={user.birthDate}  
              Email={user.Email} isValidate={user.isValidate} />
            )))}
         
        
      </div>
    </div>
  </section>
  
  )
}

export default UserScreen