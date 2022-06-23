import React,{createContext, useState} from 'react'

export const AuthContext = createContext()
export default  ({children}) => {
    const [User,setUser] = useState({})
  return (
    <AuthContext.Provider value={{
        User,
        setUser
    }} >
      {children}
        </AuthContext.Provider>
  )
}

