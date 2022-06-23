import React, { useState ,useContext} from 'react'
import {FaEye} from 'react-icons/fa'
import ModalAtom from '../recoil/Atoms/ModalAtom'
import {useSetRecoilState} from "recoil"
function UserItem({request,SetRequestModalStatus}) {
  const date = request.createdAt.split('T')[0].split("-").reverse().join("/")
  const setModalInfo = useSetRecoilState(ModalAtom)
 const OpenModal = () =>{
  setModalInfo(request._id)
  SetRequestModalStatus(true)
 }
  return (
    <tr className='w-full'>
                
               
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="text-darkBlueGray-400 font-heading">
                     { date}
                    </span>
                  </div>
                </td>
                <td className="p-0">
                     {  request.requestStatus === 1 ?      <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="py-1 px-3 text-sm text-orange-700 font-heading font-medium bg-orange-200 rounded-full">
                     en cours 
                    </span>
                  </div>  :  request.requestStatus === 2  ? <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="py-1 px-3 text-sm text-red-700 font-heading font-medium bg-red-200 rounded-full">
                     rejeté
                    </span>
                  </div> :  <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="py-1 px-3 text-sm text-green-700 font-heading font-medium bg-green-200 rounded-full">
                      accepté
                    </span>
                  </div> }
                 
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 min-w-max border-b border-gray-100">
                    <span className="text-darkBlueGray-400 font-heading">
                 {request.Forfeit === 1 ? "29.000"  : request.Forfeit ===2 ? "39.000"  : "49.000" }
                    </span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-2 h-auto min-w-max border-b border-gray-100 gap-x-4">
                  <div  onClick={OpenModal}  className='flex w-36 h-[3rem] self-center mt-8 bg-blue-500 cursor-pointer hover:bg-blue-700 shadow-lg rounded-lg justify-center items-center gap-x-3'>
                  <FaEye  size={28} color="white" />
<p className='text-lg tracking-tight font-semibold text-white'>visualiser</p>
     </div>               
                  </div>
                </td>
              </tr>
  )
}

export default UserItem