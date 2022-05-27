import React,{ useState, useRef} from 'react'
import {BsPlayFill,BsFillPauseFill} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import {ImCross} from 'react-icons/im'

function VisualResidence({SetVisual}) {
  const ImagesLinks =   JSON.parse(localStorage.getItem('imagesLinks')) 
  const VideoLink = localStorage.getItem("videoLink")
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
    const closeVisual = () => {
        SetVisual(false)
      }
  return (
    <section className="py-20 absolute h-full w-full bg-gray-100 z-[100] mx-auto">
    <div   onClick={closeVisual}  className='bg-blue-500 shadow-md cursor-pointer  hover:bg-blue-800 ml-8 w-16 h-16 rounded-lg flex items-center justify-center '>
<ImCross  size={38} color='white' />
    </div>
 <div className="container mx-auto px-4 bg-white">
   <div className="flex flex-wrap -mx-4 mb-24">
     <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
       <div className="relative mb-10" style={{ height: 564 }}>
       <div       onClick={onVideoPress} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer  w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center'  >
      { playing ? <BsFillPauseFill   size={36}  color='white'/> :       <BsPlayFill   size={36}  color='white'/> }
  
</div>
<video
             ref={videoRef}
               className="h-full w-full"
               poster="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
               muted=""
         
             >
               <source
                 src={VideoLink}
                 type="video/mp4"
               />
             </video>
   
       </div>
       <div className="flex flex-wrap -mx-2">
       {/* */}
    
      {ImagesLinks.map( img =>( 
      <div key={img} className="w-1/2 sm:w-1/4 p-2">
      <div className="block border border-blue-300" >
        <img
          className="w-full h-32 object-cover"
          src={JSON.parse(img).FileLink    }
        
        />
      </div>
    </div>
 ) ) }

       </div>
     </div>
     <div className="w-full md:w-1/2 px-4">
       <div className="lg:pl-20">
         <div className="mb-10 pb-10 border-b">
           <div className='flex gap-x-2 items-center'>
           <MdLocationPin size={36} color="red" />
           <span className="text-gray-500 text-lg">TreichVille</span>
           </div>
           <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading tracking-tighter">
            Treichville avenue 21 rue 15
           </h2>
           
           <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
             <span>non disponible</span>
           
           </p>
           <p className="max-w-md text-gray-500">
             Maecenas commodo libero ut molestie dictum. Morbi placerat eros id
             porttitor sagittis.
           </p>
         </div>
         <div className="flex mb-12">
       
           <div>
             <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
               forfait
             </span>
             <select
               className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
               name=""
               id=""
             >
               <option value={1}>29.000</option>
               <option value={2}>39.000</option>
               <option value={3}>49.000</option>
             </select>
           </div>
         </div>
         <div className="flex flex-wrap -mx-4 mb-14 items-center">
           <div className="w-full xl:w-2/3 px-4 mb-4 xl:mb-0">
             <a
               className="block bg-blue-500 hover:bg-blue-900 text-center text-white font-bold font-heading py-5 px-8 rounded-md uppercase transition duration-200"
               href="#"
             >
           Vailder inscription
             </a>
           </div>
                  </div>
      
       </div>
     </div>
   </div>
   
 </div>
</section>
  )
}

export default VisualResidence