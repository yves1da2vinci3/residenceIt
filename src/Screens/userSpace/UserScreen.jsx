import React,{ useState} from 'react'
import {HiUserCircle} from 'react-icons/hi'
import {GoAlert} from 'react-icons/go'
import {GiPayMoney} from 'react-icons/gi'
import {IoStatsChartSharp} from 'react-icons/io5'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import Modal from '../../components/Modal'

function UserScreen() {
  const [ModalState,SetModal] = useState(false)
  const [isGirl,setGirl] = useState(false)
const OpenModal = () =>{
  SetModal(true)
} 
  return (
    <div className='flex flex-col p-4  relative  '>
            { ModalState ? <Modal  setModal={SetModal} /> : "" }
      <div className='flex  gap-x-2 justify-between'>
<h1 className=' md:text-4xl font-semibold tracking-wide'>Bienvenue sur votre profil</h1>
<span className='flex gap-x-1 items-center'>
  { isGirl ?   <img src='https://us.123rf.com/450wm/apoev/apoev1903/apoev190300160/124274049-person-white-photo-placeholder-woman-silhouette-on-gray-background.jpg?ver=6' 
  className='h-16 w-16  rounded-full'
  />  :  <img src='data:image/png;base64,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' 
  className='h-16 w-16  rounded-full'
  /> }
 

  <h1 className=' md:text-4xl font-semibold tracking-wide text-blue-500'>Yves Lionel DIOMANDE</h1>
</span>

</div>
{/* services pour utilisateur */}
<div className=' flex    h-auto  justify-center md:justify-start mt-20 gap-2 flex-wrap '>
  <div className='flex flex-col gap-y-5  h-[28rem] md:h-[38rem] justify-center items-center p-4 cursor-pointer hover:bg-blue-500 hover:text-white bg-white w-[28rem] rounded-lg shadow-lg  '>
<HiUserCircle className='text-yellow-400 text-9xl'  />
<h1 className='text-xl font-semibold tracking-wide text-center '>Modifier ses informations personnels</h1>
  </div>
  <div onClick={OpenModal} className='flex flex-col gap-y-5 h-[28rem] md:h-[38rem] justify-center items-center p-4 cursor-pointer hover:bg-blue-500  hover:text-white bg-white w-[28rem] rounded-lg shadow-lg  '>
<GoAlert className='text-red-600 text-9xl'  />
<h1 className='text-xl font-semibold tracking-wide text-center '>signaler une panne</h1>
  </div>
  <div className='flex flex-col gap-y-5 h-[28rem] md:h-[38rem] justify-center items-center p-4 cursor-pointer hover:bg-blue-500 hover:text-white bg-white w-[28rem] rounded-lg shadow-lg  '>
<GiPayMoney className='text-green-600 text-9xl'  />
<h1 className='text-xl font-semibold tracking-wide text-center '>effectuer un paiment</h1>
  </div>
  <div className='flex flex-col gap-y-5 h-[28rem] md:h-[38rem] justify-center items-center p-4 cursor-pointer hover:bg-blue-500 hover:text-white bg-white w-[28rem] rounded-lg shadow-lg  '>
<IoStatsChartSharp className='text-blue-600 text-9xl'  />
<h1 className='text-xl font-semibold tracking-wide text-center '>voir informations</h1>
  </div>

</div>
<section>
  {/* <div className="skew skew-top mr-for-radius">
    <svg
      className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
      viewBox="0 0 10 10"
      preserveAspectRatio="none"
    >
      <polygon fill="currentColor" points="0 0 10 10 0 10" />
    </svg>
  </div> */}
  {/* <div className="skew skew-top ml-for-radius">
    <svg
      className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
      viewBox="0 0 10 10"
      preserveAspectRatio="none"
    >
      <polygon fill="currentColor" points="0 10 10 0 10 10" />
    </svg>
  </div> */}
  <div className="py-20 bg-gray-900 radius-for-skewed mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mb-6 lg:mb-20">
        <div className="mb-6 w-full lg:w-1/5">
          <a className="text-white text-3xl font-bold leading-none" href="#">
            <img
              className="h-12"
              src="https://cdn.worldvectorlogo.com/logos/behance-1.svg"
              alt=""
              width="auto"
            />
          </a>
        </div>
        <div className="mb-5 w-full lg:w-1/5">
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo.
          </p>
        </div>
        <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Office</h5>
            <p className="text-gray-400 leading-loose">
              359 Hidden Valley Road, NY
            </p>
          </div>
          <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
            <h5 className="mb-4 font-bold text-gray-50">Contacts</h5>
            <p className="text-gray-400">hello@example.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p className="text-sm text-gray-400">© 2021. All rights reserved.</p>
        <div className="flex space-x-2 lg:space-x-4">
          <a href="#">
           <AiOutlineTwitter size={34}  className="text-purple-600" />
          </a>
          <a href="#">
          <BsFacebook size={34}  className="text-purple-600" />
          </a>
          <a href="#">
          <AiOutlineInstagram size={34}  className="text-purple-600" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="skew skew-bottom mr-for-radius">
    <svg
      className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
      viewBox="0 0 10 10"
      preserveAspectRatio="none"
    >
      <polygon fill="currentColor" points="0 0 10 0 0 10" />
    </svg>
  </div> */}
  {/* <div className="skew skew-bottom ml-for-radius">
    <svg
      className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
      viewBox="0 0 10 10"
      preserveAspectRatio="none"
    >
      <polygon fill="currentColor" points="0 0 10 0 10 10" />
    </svg>
  </div> */}
</section>

        </div>
  )
}

export default UserScreen