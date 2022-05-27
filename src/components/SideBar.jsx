import React,{useContext} from 'react'
import {ImCross} from 'react-icons/im'
import { Link } from 'react-router-dom'
import NavAtom from '../recoil/Atoms/NavAtom'
import {useSetRecoilState} from "recoil"
function SideBar() {
  const setNavState =  useSetRecoilState(NavAtom)
  const CloseNav = () =>{
    setNavState(false)
  }
  return (
    <div className=" transition-all ease-in-out delay-150 duration-1000 fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
    <div className="fixed top-0 left-0 bottom-0 w-full  max-w-xs bg-white">
      <nav className="relative p-6 h-full overflow-y-auto">
        <div className="flex flex-col justify-between h-full">
          <a className="inline-block" href="#">
            <img
              className="h-8"
              src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
              alt=""
            />
          </a>
          <ul className="py-6">
            <li>
              <a
                className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                href="#"
              >
                  A propos
              </a>
            </li>
            <li>
              <a
                className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                href="#"
              >
          comment ca marche ?
              </a>
            </li>
            <li>
            <Link to='/residences'
              className="text-coolGray-500 hover:text-coolGray-900 font-medium"
             
            >
              Residences
            </Link>
            </li>
          </ul>
          <div className="flex flex-wrap">
            <div className="w-full mb-2">
              <Link to="/login"
                className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md"
     
              >
               se connecter
              </Link>
            </div>
            <div className="w-full">
            <Link to='/signup'
                className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-blue-500 hover:bg-blue-600 font-medium text-center focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
               
              >
                s'enregistrer
                </Link>
            </div>
          </div>
        </div>
      </nav>
      <div  onClick={CloseNav} className="navbar-close absolute top-5 p-4 right-3" >

      <ImCross size={16}  className='hover:text-blue-400 text-current '  color='text-white'  />
      </div>
   
    </div>
  </div>
  )
}

export default SideBar