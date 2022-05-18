import React,{createContext, useState} from 'react'

export const ModalContext = createContext()
export default  ({children}) => {
    const [ModalInfo,setModalInfo] = useState({})
    const [refreshTable,setrefreshTable] = useState(false)
  return (
    <ModalContext.Provider value={{
        ModalInfo,
        setModalInfo,
        setrefreshTable,
        refreshTable
    }} >
      {children}
        </ModalContext.Provider>
  )
}

