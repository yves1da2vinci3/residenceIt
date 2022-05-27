import React, { useEffect, useLayoutEffect, useState } from 'react'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'
import {HiUserCircle,HiHome} from 'react-icons/hi'
import {MdOutlineAdd,MdSettings} from 'react-icons/md'
import {GoEye} from 'react-icons/go'
import {BiMessageRoundedError,BiMessageX} from 'react-icons/bi'
import {Link, useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import userAtom from '../../recoil/Atoms/userAtom'
function DashboardSideBar() {
  const  setUser = useSetRecoilState(userAtom)
  const Navigate = useNavigate()
  let  location = useLocation()
  const logoutHandler = () => { 
    localStorage.removeItem("UserToken")
    Navigate("/")
    setUser(null)
  }

  const [residenceDropDownStatus,SetResidenceDropDownStatus] = useState(false)
  return (
    <div>
  <nav className="lg:hidden py-6 px-6 bg-gray-800">
    <div className="flex items-center justify-between">
      <a className="text-2xl text-white font-semibold" href="#">
        <img
          className="h-10"
src='https://cdn.worldvectorlogo.com/logos/behance-1.svg'
          alt=""
          width="auto"
        />
      </a>
      {/* <button className="navbar-burger flex items-center rounded focus:outline-none">
        <svg
          className="text-white bg-indigo-500 hover:bg-indigo-600 block h-8 w-8 p-2 rounded"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button> */}
    </div>
  </nav>
  <div className="hidden lg:block navbar-menu relative z-50">
    <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-gray-800 overflow-y-auto">
      <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-700">
        <a className="text-xl text-white font-semibold" href="#">
          <img
            className="h-8"
            src="https://cdn.worldvectorlogo.com/logos/behance-1.svg'"
            alt=""
            width="auto"
          />
        </a>
      </div>
      <div className="px-4 pb-6">
        <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
          Main
        </h3>
        <ul className="mb-8 text-sm font-medium">
          <li>
            <Link to='/admin/request'   className={  location?.pathname ==='/admin/request' ? "flex items-center pl-3 py-3 pr-4 text-gray-50 bg-blue-500 rounded" :'flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded'} >
              <span className="inline-block mr-3">
              <BiMessageRoundedError size={26} color="white" />
              </span>
              <span>Requetes</span>
              <span className="inline-block ml-auto">
             
              </span>
            </Link>
          </li>
          <li>
            <Link  to='/admin/breakdown' className={  location?.pathname ==='/admin/breakdown' ? "flex items-center pl-3 py-3 pr-4 text-gray-50 bg-blue-500 rounded" :'flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded'}
        
         
            >
              <span className="inline-block mr-3">
              <BiMessageX size={26} color="white" />
              </span>
              <span>Panne signalées</span>
              {/* <span className="flex justify-center items-center ml-auto bg-indigo-500 w-6 h-6 text-xs rounded-full">
                4
              </span> */}
            </Link>
          </li>
          <li        
>
            <Link to='/admin/users'
          className={  location?.pathname ==='/admin/users' ? "flex items-center pl-3 py-3 pr-4 text-gray-50 bg-blue-500 rounded" :'flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded'}
            >
              <span className="inline-block mr-3">
              <HiUserCircle size={26} color="white" />
              </span>
              <span>Utilisateurs</span>
              <span className="inline-block ml-auto">
              
              </span>
            </Link>
          </li>
          <li>
            <div   onClick={ ()=> SetResidenceDropDownStatus(!residenceDropDownStatus)}
              className="flex items-center flex-col pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded"
            
            >
              <div className='flex w-full items-center gap-x-2'>
                <span className='flex items-center'>
              <span className="inline-block mr-3">
              <HiHome size={26} color="white" />

              </span>
              <span>Residences</span>
              </span>
              <span className="inline-block ml-auto">
              { residenceDropDownStatus ?  <IoIosArrowUp   size={24} color='white' /> :   <IoIosArrowDown   size={24} color='white' /> }
              </span>
              </div>
              { residenceDropDownStatus ?  <ul className=' tracking-wide h-auto flex flex-col   gap-y-2 bg-black-900 text-white font-semibold p-5 '>
               <li > 
                 <Link to='/admin/create'>
                 <span className='flex gap-x-2 cursor-pointer hover:bg-blue-900  '>
              <MdOutlineAdd size={26} color="white" />
            <h1 className='text-white font-bold tracking-wide text-md capitalize w-full '> ajouter une residence</h1>
           
             </span>
             </Link></li>
               <li>
                 <Link to="/admin/residences" >
                  <span className='flex gap-x-2 cursor-pointer hover:bg-blue-900 '>
               <GoEye size={26} color="white" />
            <h1 className='text-white font-bold tracking-wide text-md capitalize '> voir   les residences</h1>
             </span>
             </Link>
             </li>
             </ul> : '' }
            </div>
          </li>
      

        </ul>
      
        
        <ul className="text-sm font-medium">
     
         
        
        
        </ul>
        <div className="pt-8">
          
          <div
            className="flex items-center pl-3 py-3 pr-2 text-gray-50 hover:bg-gray-900 rounded"
          onClick={logoutHandler}
          >
            <span className="inline-block mr-4">
              <svg
                className="text-gray-600 w-5 h-5"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.333618 8.99996C0.333618 9.22097 0.421416 9.43293 0.577696 9.58922C0.733976 9.7455 0.945938 9.83329 1.16695 9.83329H7.49195L5.57528 11.7416C5.49718 11.8191 5.43518 11.9113 5.39287 12.0128C5.35057 12.1144 5.32879 12.2233 5.32879 12.3333C5.32879 12.4433 5.35057 12.5522 5.39287 12.6538C5.43518 12.7553 5.49718 12.8475 5.57528 12.925C5.65275 13.0031 5.74492 13.0651 5.84647 13.1074C5.94802 13.1497 6.05694 13.1715 6.16695 13.1715C6.27696 13.1715 6.38588 13.1497 6.48743 13.1074C6.58898 13.0651 6.68115 13.0031 6.75862 12.925L10.0919 9.59163C10.1678 9.51237 10.2273 9.41892 10.2669 9.31663C10.3503 9.11374 10.3503 8.88618 10.2669 8.68329C10.2273 8.581 10.1678 8.48755 10.0919 8.40829L6.75862 5.07496C6.68092 4.99726 6.58868 4.93563 6.48716 4.89358C6.38564 4.85153 6.27683 4.82988 6.16695 4.82988C6.05707 4.82988 5.94826 4.85153 5.84674 4.89358C5.74522 4.93563 5.65298 4.99726 5.57528 5.07496C5.49759 5.15266 5.43595 5.2449 5.3939 5.34642C5.35185 5.44794 5.33021 5.55674 5.33021 5.66663C5.33021 5.77651 5.35185 5.88532 5.3939 5.98683C5.43595 6.08835 5.49759 6.18059 5.57528 6.25829L7.49195 8.16663H1.16695C0.945938 8.16663 0.733976 8.25442 0.577696 8.4107C0.421416 8.56698 0.333618 8.77895 0.333618 8.99996ZM11.1669 0.666626H2.83362C2.17058 0.666626 1.53469 0.930018 1.06585 1.39886C0.59701 1.8677 0.333618 2.50358 0.333618 3.16663V5.66663C0.333618 5.88764 0.421416 6.0996 0.577696 6.25588C0.733976 6.41216 0.945938 6.49996 1.16695 6.49996C1.38797 6.49996 1.59993 6.41216 1.75621 6.25588C1.91249 6.0996 2.00028 5.88764 2.00028 5.66663V3.16663C2.00028 2.94561 2.08808 2.73365 2.24436 2.57737C2.40064 2.42109 2.6126 2.33329 2.83362 2.33329H11.1669C11.388 2.33329 11.5999 2.42109 11.7562 2.57737C11.9125 2.73365 12.0003 2.94561 12.0003 3.16663V14.8333C12.0003 15.0543 11.9125 15.2663 11.7562 15.4225C11.5999 15.5788 11.388 15.6666 11.1669 15.6666H2.83362C2.6126 15.6666 2.40064 15.5788 2.24436 15.4225C2.08808 15.2663 2.00028 15.0543 2.00028 14.8333V12.3333C2.00028 12.1123 1.91249 11.9003 1.75621 11.744C1.59993 11.5878 1.38797 11.5 1.16695 11.5C0.945938 11.5 0.733976 11.5878 0.577696 11.744C0.421416 11.9003 0.333618 12.1123 0.333618 12.3333V14.8333C0.333618 15.4963 0.59701 16.1322 1.06585 16.6011C1.53469 17.0699 2.17058 17.3333 2.83362 17.3333H11.1669C11.83 17.3333 12.4659 17.0699 12.9347 16.6011C13.4036 16.1322 13.6669 15.4963 13.6669 14.8333V3.16663C13.6669 2.50358 13.4036 1.8677 12.9347 1.39886C12.4659 0.930018 11.83 0.666626 11.1669 0.666626Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>se deconnecter</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div className="mx-auto lg:ml-80" />
</div>

  // <div className='h-full w-72 bg-blue-800 fixed'>
  //    {/* nom et logo */}
  //   <div className='bg-white  w-full h-24 flex flex-row justify-between p-2 items-center'>
  //   <img
  //           className="h-8"
  //           src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
  //           alt=""
  //         />
  //         <h1 className='text-lg font-bold tracking-tighter leading-6'> my residence IT dashboard</h1>
  //   </div>
  //   {/* lste des options */}
  //    <ul className='mt-16
  //     flex flex-col leading-6 '>
  //        <Link to="/admin/request" >
  //      <li className='text-white font-bold tracking-wide text-lg capitalize ml-4  hover:bg-blue-900 cursor-pointer'>
  //        <span className='flex gap-x-2'>
  //             <BiMessageRoundedError size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '>requetes</h1>
  //           </span></li>  </Link>
  //      <li className='text-white font-bold tracking-wide text-lg capitalize ml-4 hover:bg-blue-900 cursor-pointer'> <span className='flex gap-x-2'>
  //             <BiMessageX size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '>Pannes signalé</h1>
  //           </span></li>
  //      <li>
  //        <div onClick={ ()=> SetResidenceDropDownStatus(!residenceDropDownStatus) }
  //         className='rounded-lg shadow-lg flex cursor-pointer justify-between p-2 items-center bg-blue-900'>
  //           <span className='flex gap-x-2'>
  //             <HiHome size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '>residence</h1>
  //           </span>
  //          { residenceDropDownStatus ?  <IoIosArrowUp   size={24} color='white' /> :   <IoIosArrowDown   size={24} color='white' /> }
  //        </div>
  //        { residenceDropDownStatus ?  <ul className=' tracking-wide h-auto flex flex-col   gap-y-2 bg-blue-900 text-white font-semibold p-5 '>
  //             <li > <span className='flex gap-x-2 '>
  //             <MdOutlineAdd size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '> ajouter une residence</h1>
  //           </span></li>
  //             <li> <span className='flex gap-x-2'>
  //             <GoEye size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '> voir   les residences</h1>
  //           </span></li>
  //           </ul> : '' }
        
         

  //      </li>
  //      <span>

  //      </span>
  //      <Link to="/admin/users" >
  //      <li className='text-white font-bold tracking-wide text-lg capitalize ml-4 hover:bg-blue-900 cursor-pointer'>
  //        <span className='flex gap-x-2'>
  //             <HiUserCircle size={26} color="white" />
  //          <h1 className='text-white font-bold tracking-wide text-lg capitalize '>utilisateurs</h1>
  //           </span></li>
  //           </Link>
  //    </ul>
  // </div>

  )
}

export default DashboardSideBar