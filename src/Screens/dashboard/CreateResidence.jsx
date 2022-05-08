import React,{useState} from 'react'
import {FaEye} from 'react-icons/fa'
import {ImUpload} from 'react-icons/im'
 import VisualResidence from '../../components/VisualResidence'
 import DropFileInput from '../../components/DragFileInput'
function CreateResidence() {
     const [VisualState,SetVisual] = useState(false)
     const [imageUpload,SetImageUpload] = useState(false)
  const OpenVisual = () =>{
    SetVisual(true)
  } 
  const OpenUploadImage = () => {
    SetImageUpload(true)
  }
  return (
    <section
  className="relative  pb-0 md:py-32 bg-white md:overflow-none overflow-x-hidden "
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
    { VisualState ? <VisualResidence  SetVisual={SetVisual} /> : " "}
    { imageUpload ? <DropFileInput  SetImageUpload={ SetImageUpload}  /> : " "}
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
        <form action="" className='bg-white shadow-lg p-8  w-auto  md:w-[35rem] rounded-lg'>
          <div className="mb-6">
            <label
              className="block mb-2 text-coolGray-800 font-medium"
              htmlFor=""
            >
              Commune
            </label>
            <input
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="name"
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
            <input
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="name"
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
            <input
              className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="name"
              placeholder="un cadre de vie epanuoie , profiter de l'ambiance... "
            />
          </div>
          
   
          <a
            className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
            href="#"
          >
                   créer une residence
          </a>
        
        
        </form>
        <div className='flex flex-wrap md:flex-nowrap  w-[45rem] gap-x-2 mr-48 '>
        <div  onClick={OpenVisual} className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-blue-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        <FaEye  size={28} color="black" />
        <p className='text-lg tracking-tight font-semibold'>Avoir un apercu</p>
             </div>
        <div  onClick={OpenUploadImage} className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-green-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
        <ImUpload  size={28} color="black" />
        <p className='text-lg tracking-tight font-semibold'>telecharger les medias</p>
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