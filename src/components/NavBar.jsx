import React, { useState ,useContext} from "react";
import {IoIosMenu} from 'react-icons/io'
import {NavContext} from "../context/NavContext";
import {Link} from 'react-router-dom'
 function Menu() {
    const {setNavState} =  useContext(NavContext)


  const ToggleNav = () =>{
    setNavState(true)
  }
  return (
   <section className="bg-white">
  <nav className="flex justify-between p-6 px-4">
    <div className="flex justify-between items-center w-full">
      <div className="xl:w-1/3">
        <a className="block max-w-max" href="#">
          <img
            className="h-8"
            src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
            alt=""
          />
        </a>
      </div>
      <div className="hidden xl:block xl:w-1/3">
        <ul className="flex justify-center">
          <li className="mr-12">
            <a
              className="text-coolGray-500 hover:text-coolGray-900 font-medium"
              href="#"
            >
             Accueil
            </a>
          </li>
          <li className="mr-12">
            <a
              className="text-coolGray-500 hover:text-coolGray-900 font-medium"
              href="#"
            >
              A propos
            </a>
          </li>
          <li className="mr-12">
            <a
              className="text-coolGray-500 hover:text-coolGray-900 font-medium"
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
      </div>
      <div className="hidden xl:block xl:w-1/3">
        <div className="flex items-center justify-end">
          <Link to='/login'
            className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
           
          >
      se connecter
          </Link>
          <Link to='/signup'
            className="inline-block py-2 px-4 text-sm leading-5 text-blue-50 bg-blue-500 hover:bg-blue-600 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
           
          >
            s'enregistrer
          </Link>
        </div>
      </div>
    </div>
    <button onClick={ ToggleNav} className="navbar-burger self-center xl:hidden">
      <IoIosMenu size={30}  color='text-white' />
    </button>
  </nav>
  {/* deuxieme bar navigator */}  
</section>

  );
}

export default Menu