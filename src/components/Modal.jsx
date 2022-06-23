import React,{useRef, useState} from 'react'
import {ImCross} from 'react-icons/im'
import axios from 'axios'
import dns from '../utils/dns'
import { SpinnerCircular } from 'spinners-react'
import {toast} from 'react-toastify'
function Modal({setModal}) {
  const [Type,SetType]= useState(0)
  const [IsLoading,setIsLoading] = useState(false)
  const [Description,SetDescription]= useState()
  const selectType = useRef(null)
  const submitHandler = async (e) => { 
    e.preventDefault()
    setIsLoading(true)
  try {
    const token =  localStorage.getItem("UserToken")
    const type =  parseInt(Type)
    console.log(type)
    const {data} = await axios.post(`${dns}/api/requests/message`,{Description, type },{
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    setIsLoading(false)
    setModal(false)
    toast.success(` ${data.message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  } catch (error) {
    console.log(error)
  }
   }
  const closeModal = () => {
    setModal(false)
  }

  return (
<div className="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-28 bg-gray-900 bg-opacity-50 overflow-y-auto z-[100] ">
  <div className="max-w-4xl p-6 sm:p-10 mx-auto bg-gray-50 rounded-lg">
      <div className=' flex justify-between'>

      <h1 className='tracking-tighter font-semibold mb-5'>Bienvenue sur l'interface de signalisation d'incident </h1>
      <ImCross   onClick={closeModal} size={24}  className='hover:text-blue-400 text-current '  color='text-white'  />
      </div>
    <form    onSubmit={submitHandler}  >
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full  px-4 mb-8 md:mb-0">
          <label
            className="block mb-2 text-gray-800 font-medium leading-6"
            htmlFor=""
          >
           selectioner votre type d'incident
          </label>
          <select ref={selectType} defaultValue={0}
          onChange={ (e) =>SetType(e.target.value)}
                className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md w-full"
        
              >
                <option value={1}>electricité</option>
                <option value={2}>eau</option>
                <option value={2}>autre</option>
              </select>
        </div>
   
      </div>
      <div className="mb-8">
        <label
          className="block mb-2 text-gray-800 font-medium leading-6"
          htmlFor=""
        >
        description(si autre a été selectionné
        )
        </label>
 
      </div>
  
      <input  onChange={ (e) =>SetDescription(e.target.value)}
  className="block h-12 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-300 leading-6 placeholder-coolGray-300 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  type="text"
  placeholder="plus d'information sur la panne"
/>
    
{ IsLoading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center mt-3 ' >
            <SpinnerCircular speed={150} size={30} color='white' />
            </div>  :        <input type='submit'
              className="inline-block py-3 px-7 mt-3 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
    value="signaler la panne"
           /> }
       
  
    </form>
  </div>
</div>

  )
}

export default Modal