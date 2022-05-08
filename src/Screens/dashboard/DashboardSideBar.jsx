import React from 'react'
import {IoIosArrowUp} from 'react-icons/io5'
function DashboardSideBar() {
  return (
  <div className='h-full w-72 bg-blue-800 fixed'>
     {/* nom et logo */}
    <div className='bg-white  w-full h-24 flex flex-row justify-between p-2 items-center'>
    <img
            className="h-8"
            src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
            alt=""
          />
          <h1 className='text-lg font-bold tracking-tighter leading-6'> my residence IT dashboard</h1>
    </div>
    {/* lste des options */}
     <ul className='mt-16 flex flex-col leading-6 '>
       <li>requete</li>
       <li>panne signalisé</li>
       <li>
         <div className='flex justify-between p-2 items-center'>
           <h1>residence</h1>
          <IoIosArrowUp   size={24} color='white' />
         </div>
        
         

       </li>
       <li>utilisateur</li>
     </ul>
  </div>

  )
}

export default DashboardSideBar