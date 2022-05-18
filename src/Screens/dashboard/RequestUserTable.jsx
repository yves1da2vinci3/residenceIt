import React, { useState ,useEffect} from 'react'
import UserItem from '../../components/UserItem'
import RequestModal from '../../components/RequestModal'
import { SpinnerCircular } from 'spinners-react';
import dns from '../../utils/dns';
import axios from 'axios';
function UsersTable() {
  const [RequestModalStatus,SetRequestModalStatus] = useState(false)
  const [loading,SetLoading] = useState(true);
  const [Requests,setRequests] = useState()
  const token =  localStorage.getItem("UserToken")

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
    },[])
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
      {/* <div className="w-full lg:w-auto px-4 flex items-center justify-center">
        <a
          className="inline-flex mr-2 md:mr-8 items-center justify-center w-11 h-12 text-xs text-darkBlueGray-400 border border-gray-100 bg-white hover:border-gray-200 rounded-xl"
          href="#"
        >
          <svg
            width={5}
            height={8}
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.80677 6.97291C5.06441 7.20854 5.06441 7.58938 4.80677 7.82328C4.54912 8.05804 4.13286 8.05978 3.87522 7.82328L0.193231 4.42529C-0.0644113 4.19053 -0.0644113 3.81056 0.193231 3.57406L3.87522 0.176073C4.1319 -0.0586909 4.54913 -0.0586909 4.80677 0.176073C5.06441 0.411706 5.06441 0.792544 4.80677 1.02644L1.78716 4.00098L4.80677 6.97291Z"
              fill="#8C949F"
            />
          </svg>
        </a>
        <a
          className="inline-flex mr-3 md:mr-4 items-center justify-center w-11 h-12 text-lg font-bold text-darkBlueGray-400 leading-5 border border-gray-100 bg-white hover:border-gray-200 rounded-xl"
          href="#"
        >
          1
        </a>
        <span className="hidden md:inline-block mr-4">
          <svg
            width={13}
            height={3}
            viewBox="0 0 13 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="1.5" cy="1.5" r="1.5" fill="#326BFF" />
            <circle opacity="0.8" cx="6.5" cy="1.5" r="1.5" fill="#326BFF" />
            <circle opacity="0.8" cx="11.5" cy="1.5" r="1.5" fill="#326BFF" />
          </svg>
        </span>
        <a
          className="inline-flex mr-3 items-center justify-center w-11 h-12 text-lg font-bold text-white leading-5 border border-blue-500 bg-blue-500 rounded-xl"
          href="#"
        >
          4
        </a>
        <a
          className="inline-flex mr-3 items-center justify-center w-11 h-12 text-lg font-bold text-darkBlueGray-400 leading-5 border border-gray-100 bg-white hover:border-gray-200 rounded-xl"
          href="#"
        >
          5
        </a>
        <a
          className="inline-flex mr-2 md:mr-8 items-center justify-center w-11 h-12 text-lg font-bold text-darkBlueGray-400 leading-5 border border-gray-100 bg-white hover:border-gray-200 rounded-xl"
          href="#"
        >
          6
        </a>
        <a
          className="inline-flex items-center justify-center w-11 h-12 text-xs text-darkBlueGray-400 border border-gray-100 bg-white hover:border-gray-200 rounded-xl"
          href="#"
        >
          <svg
            width={5}
            height={8}
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.193232 1.02709C-0.0644106 0.791457 -0.0644106 0.410619 0.193232 0.176725C0.450875 -0.0580384 0.867141 -0.0597774 1.12478 0.176725L4.80677 3.57471C5.06441 3.80947 5.06441 4.18944 4.80677 4.42594L1.12478 7.82393C0.868102 8.05869 0.450875 8.05869 0.193232 7.82393C-0.0644107 7.58829 -0.0644107 7.20746 0.193232 6.97356L3.21284 3.99902L0.193232 1.02709Z"
              fill="#8C949F"
            />
          </svg>
        </a>
      </div> */}
    </div>
  </div>
</section>

  )
}

export default UsersTable