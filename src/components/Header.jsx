import React, {useRef,useState} from 'react'
import  VideoUrl  from '../public/video/videoplayback.mp4'
import {BsPlayFill,BsFillPauseFill} from 'react-icons/bs'
function Header() {
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
    <div className="py-20 md:py-28">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap xl:items-center -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          {/* <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-blue-500 uppercase rounded-9xl">
            Header
          </span> */}
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
            A small business is only as good as its tools.
          </h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
            We’re different. Flex is the only saas business platform that lets you
            run your business on one platform, seamlessly across all digital
            channels.
          </p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                href="#"
              >
              visualiser une démo
              </a>
            </div>
            <div className="w-full md:w-auto py-1 md:py-0">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                href="#"
              >
               s'enregistrer
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto md:mr-0 max-w-max">
 <div       onClick={onVideoPress} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 cursor-pointer  w-20 h-20 rounded-full bg-blue-500 hover:bg-blue-600 flex justify-center items-center'  >
       { playing ? <BsFillPauseFill   size={36}  color='white'/> :       <BsPlayFill   size={36}  color='white'/> }
   
 </div>
            <div className="relative overflow-hidden rounded-[0.5rem] ">
              <img src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg" />
              <video
              ref={videoRef}
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 min-h-full min-w-full max-w-none"
                poster="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
                muted=""
          
              >
                <source
                  src={VideoUrl}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Header