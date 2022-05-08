import React ,{useContext} from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {ImSearch,ImUserPlus,ImHome,ImFolder} from 'react-icons/im'
import Residence from '../components/Residence'
import FeedBack from '../Layout/FeedBack'
import SideBar from '../components/SideBar'
import {NavContext} from '../context/NavContext'
import Modal from '../components/Modal'
function HomeScreen() { 
  const {NavState} = useContext(NavContext)
  // const [ModalState,SetModal] = useState(false)
  // const OpenModal = () =>{
  //   SetModal(true)
  // } 
  return (
    <div className=' h-auto relative '  >
      {/* <div   onClick={OpenModal} className=' fixed h-20 w-20 rounded-full  flex justify-center items-center bg-blue-600  bottom-4 right-4 z-50 '>
        <ImHome size={30} color='white'  className='text-current text-white ' />
        </div>  */}
  
    <NavBar />
    {NavState ?     <SideBar /> : '' }
 
    <Header />
    {/* a propos de nous */}
    <div className='h-screen  flex flex-col   md:grid md:grid-cols-2'>
      <div className='bg-white hidden  h-full md:flex items-center justify-center relative'>
   <div className='h-4/6 w-2/3 rounded-r-[4rem] bg-blue-100 shadow-md absolute left-0 top-4 '>
      {/* fond blue */}
   </div>
   <div className='h-4/6 w-2/3 z-10  '>
<img src='https://www.igc-construction.fr/sites/default/files/2020-11/maison-design-avec-terrasse-en-bois.jpg' className='object-fill h-full rounded-r-[4rem] shadow-lg ' />
   </div>
      </div>
     
{/* long speech */}
<div className='flex flex-col p-4 bg-white justify-between' >
<h1 className='text-blue-400 font-semibold text-[2rem]'>A propos de nous</h1>
<p className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight' >nous sommes ce que vous recherchez en matiere de <span className='text-blue-500 font-bold'>logement estudiantin</span> dans la ville d'abidjan.</p>

<p className='mb-8 text-xl leading-8  tracking-tight md:text-2xl text-gray-500 font-medium '>  We’re different. Flex is the only saas business platform that lets you
            run your business on one platform, seamlessly across all digital
            channels.
            We’re different. Flex is the only saas business platform that lets you
            run your business on one platform, seamlessly across all digital
            channels.
            We’re different. Flex is the only saas business platform that lets you
            run your business on one platform, seamlessly across all digital
            channels.
          </p>

          <div className=' flex flex-wrap '>
          <div className="w-full md:w-auto py-1 md:py-0 md:mr-4 cursor-pointer">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
                href="#"
              >
       plus d'infos
              </a>
            </div>
            <div className="w-full md:w-auto py-1 md:py-0">
              <a
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-300 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50 border border-blue-200 rounded-md shadow-sm"
                href="#"
              >
          nous contacter
              </a>
            </div>
          </div>
</div>
    </div>
    {/* comment ca marche  */}
    <div className='h-auto mt-4 flex flex-col md:justify-center'>
<h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center capitalize'> Comment ça<span className='text-blue-500 font-bold'> marche</span>  ?</h1>
<p className='mb-8 text-center text-xl leading-8  tracking-tight md:text-2xl text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>

{/* card qui explique */}
      <div className='flex flex-wrap px-2 gap-2 justify-center mt-8 '>
<div className=' h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center' >
  <div className='bg-black shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImSearch size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize'>verfier la disponiblité d'une residence</p>

</div>
{/* more informatons */}
<p className='mb-8 text-center text-md leading-8  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>
</div>

<div className=' h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center' >
  <div className='bg-yellow-500 shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImHome size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize ml-3'>choisir son forfait.</p>

</div>
{/* more informatons */}
<p className='mb-8 text-center text-md leading-8  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>


</div>
<div className=' h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center' >
  <div className='bg-green-500 shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImUserPlus size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize ml-2'>enregistrer ses coordonnées</p>

</div>
{/* more informatons */}
<p className='mb-8 text-center text-md leading-8  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>
</div>
<div className=' h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center' >
  <div className='bg-pink-500 shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImFolder size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize ml-3'>se rencontrer et signer les contrats</p>

</div>
{/* more informatons */}
<p className='mb-8 text-center text-md leading-8  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>
</div>



      </div>

    </div>

    {/* les maisons */}
    <div className='h-auto mt-4 flex flex-col md:justify-center '> 
    <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center capitalize'> Voici quelqu'unes de nos<span className='text-blue-500 font-bold'> residences</span>  deja fonctionels</h1>
    <p className='mb-8 text-center text-xl leading-8  tracking-tight md:text-2xl text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>

<div className='flex flex-wrap px-4 relative gap-3 md:justify-center'>
<Residence />
<Residence />
<Residence />
<Residence />
<Residence />
</div>
<div className="w-72 self-center mt-8  p-4 cursor-pointer">
              <p
                className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-blue-50 font-medium text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border border-blue-500 rounded-md shadow-sm"
  
              >
              voir plus
              </p>
            </div>
    </div>
    <div  className='h-screen mt-16'>
      {/* give FeedBack */}

<FeedBack />
    </div>
    </div>
  )
}

export default HomeScreen