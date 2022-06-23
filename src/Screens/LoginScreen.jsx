import React,{useRef,useContext, useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import dns from '../utils/dns'
import userAtom from "../recoil/Atoms/userAtom"
  import 'react-toastify/dist/ReactToastify.css';
  import { SpinnerCircular } from 'spinners-react';

import {useRecoilState} from 'recoil'

function SignupScreen() {
  const [User,setUser] = useRecoilState(userAtom)
  const navigate = useNavigate();
    useEffect(()=>{
      const token = localStorage.getItem("UserToken")
      if(!token) return
      if(Object.keys(User).length > 0){
        if (User.isAdmin) {

          navigate("/admin/request");
        }
    
        if(!User.isAdmin){
          navigate("/user");
        }
      }
    
    },[])

  
  
  // config pour la requete
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const EmailInput = useRef(null)
  const PasswordInput = useRef(null)


const [IsLoading,setIsLoading] = useState(false)
  const SubmitHandler = async (e) => { 
    e.preventDefault()
    setIsLoading(true)
    const Email = EmailInput.current.value;
    const password = PasswordInput.current.value;
    console.table({Email,password})
    try  {
      const {data} = await axios.post(`${dns}/api/users/login`,
      {Email,password},config)
      localStorage.setItem("UserToken",data.token)
      setUser(data)     
      if(data.isAdmin){
        navigate("/admin/request")
      }else{
        navigate("/user")
      }
      console.log(data)
        
    } catch(error){
      const erreur = error.response.data.message ?  error.response.data.message : " mot de passe ou email incorrect"
       
      toast.error(` ${erreur}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
              console.log('error', erreur)
    }
    setIsLoading(false)

   }
  return (
    <section
    className="relative pt-16 pb-0 md:py-32 bg-white"
    style={{
      backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
      backgroundPosition: "center"
    }}
  >
    <div className="container px-4 mx-auto mb-16">
      <div className="w-full md:w-3/5 lg:w-1/2">
        <div className="max-w-sm mx-auto">
          <div className="mb-6 text-center">
            <a className="inline-block mb-6" href="#">
              <img
                className="h-16"
                src="flex-ui-assets/logos/flex-circle-blue.svg"
                alt=""
              />
            </a>
            <h3 className="mb-4 text-2xl md:text-3xl font-bold">
              Connectez vous   a votre compte
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
            </p>
          </div>
          <form  onSubmit={SubmitHandler}>
            <div className="mb-6">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
                Email
              </label>
              <input
              ref={EmailInput}
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="email"
                placeholder="dev@shuffle.dev"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-coolGray-800 font-medium"
                htmlFor=""
              >
             Mot de passe
              </label>
              <input
              ref={PasswordInput}
                className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                type="password"
                placeholder="************"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              {/* <div className="w-full md:w-1/2">
                <label className="relative inline-flex items-center">
                  <input
                       ref={PasswordInput}
                    className="form-checkbox appearance-none"
                    type="checkbox"
                  />
                  <img
                    className="absolute top-1/2 transform -translate-y-1/2 left-0"
                    src="flex-ui-assets/elements/sign-up/checkbox-icon.svg"
                    alt=""
                  />
                  <span className="ml-7 text-xs text-coolGray-800 font-medium">
                    Remember me
                  </span>
                </label>
              </div> */}
              {/* <div className="w-full md:w-auto mt-1">
                <a
                  className="inline-block text-xs font-medium text-blue-500 hover:text-blue-600"
                  href="#"
                >
                  Forgot your password?
                </a>
              </div> */}
            </div>
            { IsLoading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center ' >
            <SpinnerCircular speed={150} size={30} color='white' />
            </div>  :        <input type='submit'
              className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center cursor-pointer leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
    value="  Se connecter"
           /> }
     
            
          
            {/* <p className="text-center">
              <span className="text-xs font-medium">Si vous n'avez de compte?</span>
              <a
                className="inline-block text-xs font-medium text-blue-500 hover:text-blue-600 hover:underline"
                href="#"
              >
                s'enregistrer
              </a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
    <img
      className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
      src="http://image.over-blog.com/7nG4s3SIL9DWZD1yEkxttu_nbws=/filters:no_upscale()/image%2F0668430%2F20210113%2Fob_c1a7b1_maison.jpg"
      alt=""
    />
  </section>
  
  )
}

export default SignupScreen