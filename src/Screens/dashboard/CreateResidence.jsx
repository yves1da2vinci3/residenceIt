import React,{useRef, useState} from 'react'
import {FaEye} from 'react-icons/fa'
import {RiVideoUploadFill,RiImageAddFill} from 'react-icons/ri'
 import VisualResidence from '../../components/VisualResidence'
 import DropFileInputVideo from '../../components/DragFileInputVideo'
 import DragFileInputImage from '../../components/DragFileInputImage'
import axios from 'axios'
import dns from '../../utils/dns'
import { useNavigate  } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import {toast} from 'react-toastify'
function CreateResidence() {
  const token =  localStorage.getItem("UserToken")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }}
  const Navigate = useNavigate()

  const [IsLoading,setIsLoading] = useState(false)
  const communeRef = useRef(null)
  const LocalisationRef = useRef(null)
  const DescriptionRef = useRef(null)
  const sexInput = useRef(null)
     const [VisualState,SetVisual] = useState(false)
     const [imageUpload,SetImageUpload] = useState(false)
     const [VideoUpload,SetVideoUpload] = useState(false)
  const OpenVisual = () =>{
    SetVisual(true)
  } 
  const OpenUploadImage = () => {
    SetImageUpload(true)
  }
  const submitHandler = async (e) => { 
    e.preventDefault()
    setIsLoading(true)
    let imageUrls = []
    const Description = DescriptionRef.current.value
    const Localisation = communeRef.current.value
    const MoreInfoLocalisation = LocalisationRef.current.value
   const sexe = sexInput.current.value
   const imageUrlsString =    JSON.parse(localStorage.getItem('imagesLinks'))
   imageUrlsString.forEach(imgString => {
    imageUrls.push(JSON.parse(imgString))
   });
   const videoUrl = JSON.parse(localStorage.getItem("videoLink")) 
   console.log("merrco, de chien")
   console.log(videoUrl)
    try {
      const {data} = await axios.post(` ${dns}/api/residences/`,  {Description, Localisation,MoreInfoLocalisation,sexe,imageUrls,videoUrl} ,config)
 
      console.log(data)
      setIsLoading(false)
      toast.success(` ${data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        localStorage.removeItem("imagesLinks")
            localStorage.removeItem("videoLink")
        Navigate('/admin/request',{ replace : true })
    } catch (error) {
      toast.error(` ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      console.log(error)
    }
   }
  return (
    <section
  className="relative  p-5 md:py-32 bg-white md:overflow-none overflow-x-hidden "
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
    { VisualState ? <VisualResidence  SetVisual={SetVisual} /> : " "}
    { VideoUpload ? <DropFileInputVideo  SetVideoUpload={ SetVideoUpload}  /> : " "}
    { imageUpload ? <DragFileInputImage  SetImageUpload={ SetImageUpload}  /> : " "}
  <div className="container px-4 mb-16">
    <div className="w-full md:w-3/5 lg:w-1/2">
      <div className="max-w-sm mx-auto">
        <div className="mb-6 text-center">
          <a className="inline-block mb-6" href="#">
            <img
              className="h-16"
              src="flex-ui-assets/logos/flex-circle-green.svg"
              alt=""
            />
          </a>
          <h3 className="mb-4 text-2xl md:text-3xl font-bold">
            Adminsitation de MyRESIDENCE IT
          </h3>
          <p className="text-lg text-coolGray-500 font-medium">
            Création de residence
          </p>
        </div>
        <form  onSubmit={submitHandler} className='bg-white shadow-lg p-8  w-auto  md:w-[35rem] rounded-lg'>
          <div className="mb-6">
            <label
              className="block mb-2 text-coolGray-800 font-medium"
              htmlFor=""
            >
              Commune
            </label>
            <input ref={communeRef}
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="text"
              placeholder="Treichville"
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-coolGray-800 font-medium"
              htmlFor=""
            >
              Localisation
            </label>
            <input ref={LocalisationRef}
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="text"
              placeholder="rue 15 avenue 21 "
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-coolGray-800 font-medium"
              htmlFor=""
            >
        Description
            </label>
            <input ref={DescriptionRef}
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              type="text"
              placeholder="un cadre de vie epanouie , profiter de l'ambiance... "
            />
          </div>
          
          <div className="w-full bg-gray-50  p-3 mb-8 md:mb-2">
          <label
            className="block mb-2 text-gray-800 font-medium leading-6"
            htmlFor=""
          >
           selectioner votre sexe
          </label>
          <select  ref={sexInput}
                className="pl-6 pr-10 py-4 bg-gray-50 font-semibold font-heading text-gray-500 border rounded-md w-full"
        
              >
                <option value="Masculin">Masculin</option>
                <option value='Feminin'>Feminin</option>
              </select>
        </div>
        { IsLoading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center ' >
            <SpinnerCircular speed={150} size={30} color='white' />
            </div>  :        <input type='submit'
              className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
    value="  creer une residence"
           /> }
                  
         
        
        
        </form>
        <div className='flex flex-wrap md:flex-nowrap  w-[45rem] gap-x-2 mr-48 '>
        <div  onClick={OpenVisual} className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-blue-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        <FaEye  size={28} color="black" />
        <p className='text-lg tracking-tight font-semibold'>Avoir un apercu</p>
             </div>
        <div  onClick={SetVideoUpload} className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-yellow-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        <RiVideoUploadFill  size={28} color="black" />
        <p className='text-lg tracking-tight font-semibold'>telecharger la video</p>
             </div>
        <div  onClick={OpenUploadImage} className='flex w-96 mr-4 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-pink-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        <RiImageAddFill  size={28} color="black" />
        <p className='text-lg tracking-tight font-semibold'>telecharger les images</p>
             </div>
        </div>
      </div>
    </div>
  </div>
  <img
    className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
    src="https://www.igc-construction.fr/sites/default/files/2020-11/maison-design-avec-terrasse-en-bois.jpg"
    alt=""
  />
</section>

  )
}

export default CreateResidence