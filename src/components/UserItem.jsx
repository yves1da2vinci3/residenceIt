import React, { useState } from 'react'
import {BsTrashFill} from 'react-icons/bs'
import {MdApproval} from 'react-icons/md'
function UserItem({requestState}) {

  return (
    <tr>
                <td className="p-0">
                  <div className="flex items-center pl-11 h-20 min-w-max border-b border-gray-100">
                   
                    <span className="font-heading font-medium">#55438</span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-start p-5 h-20 min-w-max border-b border-gray-100">
                    <img
                      className="mr-5 w-8 h-8 rounded-full"
                      src="https://cdn.shopify.com/s/files/1/0241/8619/1927/files/law-one-piece_90d76e3e-0598-49c1-aeac-116200f7e42b.jpg?v=1590163413"
                      alt=""
                    />
                    <div>
                      <div className="font-heading font-medium">
                        Reta Havertz
                      </div>
                      <div className="text-sm text-darkBlueGray-400 font-heading">
                        reta@shuffle.dev
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="text-darkBlueGray-400 font-heading">
                      08.04.2021
                    </span>
                  </div>
                </td>
                <td className="p-0">
                     {  requestState === 0 ?      <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="py-1 px-3 text-sm text-orange-700 font-heading font-medium bg-orange-200 rounded-full">
                      Pending
                    </span>
                  </div>  :   <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="py-1 px-3 text-sm text-green-700 font-heading font-medium bg-green-200 rounded-full">
                      Completed
                    </span>
                  </div> }
                 
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="text-darkBlueGray-400 font-heading">
                      Monthly subscription
                    </span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-auto min-w-max border-b border-gray-100 gap-x-4">
                  <div   className='flex w-36 h-[3rem] self-center mt-8 bg-green-500 cursor-pointer hover:bg-green-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>

<p className='text-lg tracking-tight font-semibold text-white'>valider</p>
     </div>
     <div   className='flex w-36 h-[3rem] self-center mt-8 bg-red-500 cursor-pointer hover:bg-red-600 shadow-lg rounded-lg justify-center items-center gap-x-3'>

<p className='text-lg tracking-tight font-semibold text-white'>annuler</p>
     </div>
            
                 
                    {/* <BsTrashFill size={25}  className='cursor-pointer text-red-400 text-current'   />

                    <MdApproval size={25} className='cursor-pointer text-green-400 text-current'   /> */}
                   
                  </div>
                </td>
              </tr>
  )
}

export default UserItem