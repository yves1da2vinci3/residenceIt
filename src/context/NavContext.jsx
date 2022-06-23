import React,{createContext, useState} from 'react'

export const NavContext = createContext()
export default  ({children}) => {
    const [NavState,setNavState] = useState(false);
  return (
    <NavContext.Provider value={{
        NavState,
        setNavState
    }} >
      {children}
        </NavContext.Provider>
  )
}

