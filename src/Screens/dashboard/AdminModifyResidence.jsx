import React,{useEffect, useRef, useState} from 'react'
import {FaEye} from 'react-icons/fa'
import {RiVideoUploadFill,RiImageAddFill} from 'react-icons/ri'
 import DropFileInputVideo from '../../components/DragFileInputVideo'
 import DragFileInputImage from '../../components/DragFileInputImage'
import axios from 'axios'
import dns from '../../utils/dns'
import { useNavigate, useParams  } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import {toast} from 'react-toastify'
import {BsPlayFill,BsFillPauseFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'
import AdminResidenceImageItem from '../../components/AdminResidenceImageItem'
import { ref, deleteObject } from "firebase/storage";
import {storage} from '../../Firebase'
function AdminModifyResidence() {
    //** DECLARATIONS DE VARIABLES */
    const Navigate = useNavigate()
    const [video,Setvideo] = useState({})
    const [imageUrls,SetimageUrls] = useState ([])
    const params = useParams()
  const [videoLoading,setvideoLoading]  = useState(false)
    const communeRef = useRef(null)
    const DescriptionRef = useRef(null)
    const sexInput = useRef(null)
    const LocalisationRef = useRef(null)
    const [residence,setResidence] = useState()
    const [loading,SetLoading] = useState(true);
    const OpenVisual = () =>{
      SetVisual(true)
    } 
    //- state pour les ajouts de d'image et photo
    const [imageUpload,SetImageUpload] = useState(false)
    const [VideoUpload,SetVideoUpload] = useState(false)

//- declaration des fonctrons upload
const OpenUploadImage = () => {
    SetImageUpload(true)
  }
  //- tableau dees index des images supprimés 
  const [deleteArraysIndex,setdeleteArraysIndex] = useState([])
 
  //- videoContainer 
  const VideoContainer = useRef(null)
 //- toggle pour le switch
      const [toggle, setToggle] = useState(true);

      const toggleClass = ' transform translate-x-5';
     // defintion de la fonctio submitHandler
     const submitHandler = async (e) => { 
      e.preventDefault()
      const token =  localStorage.getItem("UserToken")
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }}
  
       const newImagesUrls = []
       let updatedVideo = false
       let updatedImage = false
       let videoUrl = ""
        SetLoading(true)
        const Description = DescriptionRef.current.value
        const Localisation = communeRef.current.value
        const MoreInfoLocalisation = LocalisationRef.current.value
        //verfication d'ajout  d'mage
        if(localStorage.getItem("imagesLinks").length >3 ) {
          const NewimageUrlsString =    JSON.parse(localStorage.getItem('imagesLinks'))
          NewimageUrlsString.forEach(imgString => {
           newImagesUrls.push(JSON.parse(imgString))
          });
        }
       
       if(localStorage.getItem("videoLink").length > 0){

         videoUrl = JSON.parse(localStorage.getItem("videoLink")) 
       }
       if(newImagesUrls.length > 0) {
        updatedImage = true
             }
       if(videoUrl.length > 0) {
  updatedVideo = true
       }
     
 
       console.log(videoUrl)
        try {
          const {data} = await axios.put(` ${dns}/api/residences/${params.IdResidence}`,  {Description, Localisation,MoreInfoLocalisation,newImagesUrls,videoUrl,toggle,deleteArraysIndex,updatedVideo,updatedImage} ,config)
     
          console.log(data)
          SetLoading(false)
          toast.success(` ${data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            localStorage.setItem("imagesLinks",JSON.stringify([]))
            localStorage.setItem("videoLink",  "" )
            Navigate('/admin/residences',{ replace : true })
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
       // 
       const deleteVideo = () => { 
        setvideoLoading(true)
        console.log(video)
        const Filereference = video.FileReference
        const desertRef = ref(storage,Filereference);
        deleteObject(desertRef).then(() => {
          setvideoLoading(false)
         console.log("bien supprimé")  
         }).catch((error) => {
          console.log(error)
         });
         videoRef.current.poster = ""
         VideoContainer.current.style.height = "4rem"
       Setvideo({})

        }
// defintion de la fonction
useEffect(() => {
  console.log("modia est juste test")
  SetLoading(true)
 const FetchResidence = async () => {
  try {
    const {data} = await axios.get(` ${dns}/api/residences/${params.IdResidence}`,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setResidence(data)
    SetimageUrls(data.imageUrls)
    Setvideo(data.videoUrl)
    setToggle(data.isAvailable)
     DescriptionRef.current.value = data.Description 
    communeRef.current.value  = data.Localisation 
   LocalisationRef.current.value   = data.MoreInfoLocalisation 
    // console.log(data)
    SetLoading(false)
  } catch (error) {
    console.log(error)
  }
 }
 FetchResidence()
  },[])
    // declarationn des elements pour les telechargements  
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

  const onVideoPress = () => {
      if(playing) {
          videoRef.current.pause();
          setPlaying(false)
      } else {
          videoRef.current.play();
          setPlaying(true)
      }
  
    }



    return (
      <section
    className="grid grid-cols-2   "

  >
      {/* { VisualState ? <VisualResidence  SetVisual={SetVisual} /> : " "} */}
      { VideoUpload ? <DropFileInputVideo  SetVideoUpload={ SetVideoUpload}  /> : " "}
      { imageUpload ? <DragFileInputImage  SetImageUpload={ SetImageUpload}  /> : " "}
    
      <div className="w-full md:w-3/5 lg:w-1/2">
        <div className="max-w-sm mx-auto">
          <div className="mt-5 mb-2 text-center">
           
            <h3 className="mb-2 text-2xl md:text-3xl font-bold">
              Adminsitration de MyRESIDENCE IT
            </h3>
            <p className="text-lg text-coolGray-500 font-medium">
              Modification de residence
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
        modifier la disponibilité
            </label>
            <div
      className={"  md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer " + (toggle ? " bg-green-500" : "bg-red-500 ")}
      onClick={() => {
        setToggle(!toggle);
      }}
    >

   {/* Switch */}
      <div
        className =  {"bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md      transform" +  (toggle ? null : toggleClass)}
      >
</div>

</div>
          </div>
          { loading ? <div className='bg-blue-500 p-3 rounded flex items-center justify-center ' >
              <SpinnerCircular speed={150} size={30} color='white' />
              </div>  :        <input type='submit'
                className="inline-block py-3 px-7 mb-6 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
      value="  Modfier la residence"
             /> }
                    
           
          
          
          </form>
          <div className='flex flex-wrap md:flex-nowrap  w-[45rem] gap-x-2 mr-48 '>
          {/* <div  onClick={OpenVisual} className='flex w-96 h-[4.5rem] self-center mt-8 bg-white cursor-pointer hover:bg-blue-500 shadow-lg rounded-lg justify-center items-center gap-x-3'>
          <FaEye  size={28} color="black" />
          <p className='text-lg tracking-tight font-semibold'>Avoir un apercu</p>
               </div> */}
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
    
    <div className='flex justify-center items-center '>
        <div className='w-[38rem] h-auto pb-9 rounded-lg z-50 bg-white shadow-lg p-5 gap-y-2 '>
            {/* les images */}
        <p className='text-lg tracking-tight font-semibold uppercase bg-green-400 pl-3 text-white  rounded-lg shadow-md  ' > les images</p>
        <div className='w-[36rem]  h-auto    flex flex-wrap gap-2 justify-center   p-2 rounded-lg '>
      {imageUrls?.map( img =>(
      
              <AdminResidenceImageItem key={img.FileReference } SetimageUrls={SetimageUrls} deleteArraysIndex={deleteArraysIndex} setdeleteArraysIndex={setdeleteArraysIndex}  imageUrls={imageUrls}    imgUrl={img.FileLink } />
          )

          )}
        
  
        </div>

           {/* la video */}
        <p className='text-lg tracking-tight font-semibold uppercase bg-yellow-400 pl-3 text-white  rounded-lg shadow-md mb-3 ' > la video</p>
        <div  ref={VideoContainer}  className='w-[36rem]  h-[16rem]   relative '>
            <div onClick={deleteVideo} className='absolute top-2 right-2 cursor-pointer  h-8 w-8   z-50 '>
            { videoLoading ?  <SpinnerCircular speed={150} size={25} color='red' /> : <ImCross  size={15} color='red ' /> }
        
        </div>
        {/* <div       onClick={onVideoPress} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer  w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center'  >
      { playing ? <BsFillPauseFill   size={36}  color='white'/> :       <BsPlayFill   size={36}  color='white'/> }
  
</div> */}
        <video 
             ref={videoRef}
               className="h-full w-full object-cover ring-blue-200 right-2 " 
               poster={imageUrls[0]?.FileLink}
               muted=""
         
             >
               <source
                 src={  video }
                 type="video/mp4"
               />
             </video>
        </div>
        </div>
    <img
      className="md:absolute md:top-0 md:right-0 mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
      src="https://www.igc-construction.fr/sites/default/files/2020-11/maison-design-avec-terrasse-en-bois.jpg"
      alt=""
    />
    </div>
  </section>
  
    )
  }

export default AdminModifyResidence