import React from 'react'
import {ImCross} from 'react-icons/im'

function Modal({setModal}) {
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
    <form action="">
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full  px-4 mb-8 md:mb-0">
          <label
            className="block mb-2 text-gray-800 font-medium leading-6"
            htmlFor=""
          >
           selectioner votre type d'incident
          </label>
          <select
                className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md w-full"
                name=""
                id=""
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
  
      <input
  className="block h-12 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-300 leading-6 placeholder-coolGray-300 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  type="text"
  placeholder="plus d'information sur la panne"
/>
    
      <a
        className="mt-8 inline-block py-3 px-7 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
        href="#"
      >
       signaler panne
      </a>
    </form>
  </div>
</div>

  )
}

export default Modal