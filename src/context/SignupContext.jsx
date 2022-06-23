import React,{createContext, useState} from 'react'

export const SignupContext = createContext()
export default  ({children}) => {
    const [ResidenceInfo,setResidenceInfo] = useState({})
    const [Forfeit,setForfeit] = useState(0)
  return (
    <SignupContext.Provider value={{
        ResidenceInfo,
        setResidenceInfo,
        Forfeit,
        setForfeit
    }} >
      {children}
        </SignupContext.Provider>
  )
}

