import axios from 'axios'
import React,{useEffect, useRef, useState} from 'react'
import { SpinnerCircular } from 'spinners-react'
import dns from '../../utils/dns'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
function profileScreen() {
  const  Navigate = useNavigate()
  const [IsLoading,setIsLoading] = useState(true)
  // definition es variables 
  const LastNameInput = useRef(null)
  const FirstNameInput = useRef(null)
  const phoneNumberInput = useRef(null)
  const EmailInput = useRef(null)
  const passwordInput = useRef(null)
  const SchoolInput = useRef(null)
  const   birthDateInput = useRef(null)
  const FecthUserProfile = async  () => { 
    const token =  localStorage.getItem("UserToken")
    try {
      const {data} = await axios.get(` ${dns}/api/users/profile`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      LastNameInput.current.value = data.lastName
      FirstNameInput.current.value = data.firstName
      phoneNumberInput.current.value = data.phoneNumber
      EmailInput.current.value = data.Email
      SchoolInput.current.value = data.School
      birthDateInput.current.value = data.birthDate
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
  useEffect(()=>{
    FecthUserProfile()
  },[])
  const submitHandler = async (e) => { 
    e.preventDefault()
    setIsLoading(true)
    const token =  localStorage.getItem("UserToken")
const lastName = LastNameInput.current.value
const firstName = FirstNameInput.current.value
const phoneNumber = phoneNumberInput.current.value
const Email = EmailInput.current.value
const password = passwordInput.current.value
const School = SchoolInput.current.value
const birthDate = birthDateInput.current.value
    axios.put(`${dns}/api/users/profile`,{lastName, firstName,phoneNumber,Email, password,School,birthDate}, { headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(response=>{
  setIsLoading(false)
   Navigate("/user") 
  toast.success(` ${response.data.message}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true, 
    progress: undefined,
    });
}).catch(error => {
  console.log(error)
})

   }
  return (
<section
  className="flex jusitfy-center items-center  bg-white"
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container p-4 mx-auto">
    <div className="max-w-sm mx-auto">
      <div className="mb-6 text-center">
        <h3 className="mb-4 text-2xl md:text-3xl font-bold">
        modifier informations
        </h3>
   
      </div>

      <form onSubmit={submitHandler} className='bg-white shadow-lg p-8  w-auto  md:w-[35rem] rounded-lg' >
   
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Nom
          </label>
          <input ref={FirstNameInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            prenoms
          </label>
          <input ref={LastNameInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Numero
          </label>
          <input ref={phoneNumberInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
          date de naissance
          </label>
          <input ref={birthDateInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
       etablissement
          </label>
          <input ref={SchoolInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Email
          </label>
          <input ref={EmailInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
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
          <input ref={passwordInput}
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="password"
            placeholder="************"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-2">
         
     
        </div>
        { IsLoading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center ' >
            <SpinnerCircular speed={150} size={30} color='white' />
            </div>  :        <input type='submit'
              className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center cursor-pointer leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
    value=" modifier le compte"
           /> }
    
      
       
      </form>
    </div>
  </div>
</section>

  
  )
}

export default profileScreen