import React,{useState} from 'react'
import {FaEye} from 'react-icons/fa'
import {MdLocationPin,MdPinDrop} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
function ResidenceItem({residence}) {
  const Navigate = useNavigate()
const residenceId = residence._id

  const residenceLink ="/residence/"+ residenceId

//   const moveToOneResidence = () => { 
// // Navigate(` ${residenceId}`)

// //    }
    // const [IsAvailable,SetAvailable] = useState(true)
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 md:px-10 mb-20">
    <div className="p-6 bg-white">
        { residence.isAvailable ? <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-blue-300 rounded-full text-blue-300 uppercase bg-white">
           disponible
          </span> : <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
        saturé
      </span> }
      
      <div className="block px-6 mt-8 mb-2">
        <img
          className="mb-5 mx-auto h-56 w-full object-contain"
          src={residence.imageUrls[0].FileLink}
    
        />
          <div className='flex gap-x-2'>
          <MdPinDrop size={26} color="red" />
        <h3 className="mb-2 text-xl font-bold font-heading">
      
          {residence.Localisation}
        </h3>
          </div>

        <p className="text-xs text-gray-500 font-semibold">
          {residence.MoreInfoLocalisation}
       
        </p>
      </div>
      <Link 
       to={residenceLink}      className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500 cursor-pointer"
   
      >
    <FaEye  size={28} color="black" />
      </Link   >
    </div>
  </div>
  )
}

export default ResidenceItem