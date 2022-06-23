import React,{createContext, useState} from 'react'

export const UploadContext = createContext()
export default  ({children}) => {
    const [videoLink,SetVideoLink] = useState("")    
    const [ImagesLink,SetImagesLink] = useState([]) 
     return (
    <UploadContext.Provider value={{
        videoLink,
        SetVideoLink,
        ImagesLink,
        SetImagesLink
    }} >
      {children}
        </UploadContext.Provider>
  )
}

