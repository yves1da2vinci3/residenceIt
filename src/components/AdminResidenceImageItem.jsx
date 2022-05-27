import React,{useState} from 'react'
import {ImCross} from 'react-icons/im'
import { ref, deleteObject } from "firebase/storage";
import {storage} from '../Firebase'
import { SpinnerCircular } from 'spinners-react'

function AdminResidenceImageItem({imgUrl,imageUrls,SetimageUrls,deleteArraysIndex,setdeleteArraysIndex}) {
  console.log( imageUrls[0].Filereference)
 
const [Loading,setLoading] = useState(false)
  const deleteItem = () => { 
    setLoading(true)
    let index = imageUrls.findIndex(elt => elt.FileLink === imgUrl)
    console.log(index)
    if(index === -1){
      index = 0
    }
  
    const FileReference = imageUrls[index].Filereference
    console.log(FileReference)
    const desertRef = ref(storage,FileReference);
    deleteArraysIndex.push(FileReference)
    const NewFileRefernceArray = [...deleteArraysIndex]
    setdeleteArraysIndex(NewFileRefernceArray)
    console.log(deleteArraysIndex)
    // Delete the file
    deleteObject(desertRef).then(() => {
     setLoading(false)
      imageUrls.splice(index,1)
      console.table( imageUrls)
      const newArrays = [...imageUrls]
      console.log(newArrays)
      SetimageUrls(newArrays)
    }).catch((error) => {
     console.log(error)
    });
    // Delete the file
   }

  return (
    <div className=' w-[5rem] h-[5rem] ring-2 ring-blue-300 relative '> 
     <div  onClick={deleteItem}  className='absolute top-2 right-2 cursor-pointer'>
       { Loading ?  <SpinnerCircular speed={150} size={25} color='red' /> : <ImCross  size={15} color='red ' /> }
    
    </div>
    <img className='object-cover' src={imgUrl} />
    </div>
  )
}

export default AdminResidenceImageItem