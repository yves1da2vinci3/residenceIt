import React, { useState ,useEffect} from 'react'
import UserItem from '../../components/UserItem'
import RequestModal from '../../components/RequestModal'
import { SpinnerCircular } from 'spinners-react';
import dns from '../../utils/dns';
import axios from 'axios';
import {useRecoilValue} from 'recoil'
import RefreshTableAtom from '../../recoil/Atoms/RefreshTableAtom'
function UsersTable() {
  const [RequestModalStatus,SetRequestModalStatus] = useState(false)
  const [loading,SetLoading] = useState(true);
  const [Requests,setRequests] = useState()
  const token =  localStorage.getItem("UserToken")
 const refreshState = useRecoilValue(RefreshTableAtom)
  useEffect(() => {
    SetLoading(true)
   const FetchRequests = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/requests`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setRequests(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchRequests()
    },[refreshState])
  return (
<section className="py-8 bg-white flex-[3]   ">
  {RequestModalStatus ? <RequestModal SetRequestModalStatus={SetRequestModalStatus} /> : "" }
    <div className="mb-16 bg-white border border-gray-100 overflow-hidden rounded-5xl">
      <div className="overflow-x-auto">
        <div className="inline-block w-full overflow-hidden">
          <table className="w-full ">
            <thead>
              <tr className="bg-gray-50">
              
                
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20  border-b border-gray-100">
                    <span className="text-sm font-heading font-semibold uppercase">
                      date de creation
                    </span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20  border-b border-gray-100">
                    <span className="text-sm font-heading font-semibold uppercase">
                      Statuts
                    </span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20  border-b border-gray-100">
                    <span className="text-sm font-heading font-semibold uppercase">
                      Forfait
                    </span>
                  </div>
                </td>
                <td className="p-0">
                  <div className="flex items-center justify-center p-5 h-20 w-72 border-b border-gray-100">
                    <span className="text-sm font-heading font-semibold uppercase">
                      Action
                    </span>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
            { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   Requests.map(request => (
              <UserItem key={request._id} request={request}   SetRequestModalStatus={SetRequestModalStatus} />
            )))}
     
            </tbody>
          </table>
        </div>
    
    </div>
    <div className="flex flex-wrap -mx-4 items-center justify-between">
      <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
     
      </div>
   s
    </div>
  </div>
</section>

  )
}

export default UsersTable