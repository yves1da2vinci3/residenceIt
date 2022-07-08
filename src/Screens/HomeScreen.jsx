import React ,{useContext,useEffect, useState} from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import {ImSearch,ImUserPlus,ImHome,ImFolder} from 'react-icons/im'
import Residence from '../components/Residence'
import FeedBack from '../Layout/FeedBack'
import SideBar from '../components/SideBar'
import  {useNavigate } from 'react-router-dom'
import axios from 'axios'
import dns from '../utils/dns'
import NavAtom from '../recoil/Atoms/NavAtom'
import userAtom from "../recoil/Atoms/userAtom"
import {useRecoilValue,useSetRecoilState} from "recoil"
import { SpinnerCircular } from 'spinners-react';

function HomeScreen() { 
  // appel de residences
  const [residences,setResidences] = useState([])
  const [loading,SetLoading] = useState(true);
  useEffect(() => {
    SetLoading(true)
   const FetchResidences = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/residences`,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setResidences(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchResidences()
    },[])
    //recuperer les valeurs de NAV
  const NavState = useRecoilValue(NavAtom)
  const setUser = useSetRecoilState(userAtom)
  
  useEffect(() =>{
    const FecthUserProfile = async  () => { 
      const token =  localStorage.getItem("UserToken")
      try {
        const {data} = await axios.get(` ${dns}/api/users/profile`,{
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        setUser(data)
        if(data){
          if(data.isAdmin){
            return  navigate("/admin/request")
          }
          if(!data.isAdmin){
            return  navigate("/user/")
          }
        }
      
      } catch (error) {
        console.log(error)
      }
  }
  FecthUserProfile()
}
  ,[])
  const navigate = useNavigate()

  const moveToResidences = () => { 
    navigate("/residences")
   }
  return (
    <div className=' h-auto relative '  >
      {/* <div   onClick={OpenModal} className=' fixed h-20 w-20 rounded-full  flex justify-center items-center bg-blue-600  bottom-4 right-4 z-50 '>
        <ImHome size={30} color='white'  className='text-current text-white ' />
        </div>  */}
  
    <NavBar />
    {NavState ?     <SideBar /> : '' }
 
    <Header />
    {/* a propos de nous */}
    <div className='h-auto  flex flex-col   md:grid md:grid-cols-2'>
      <div className='bg-white hidden  h-auto md:flex items-center justify-center relative'>
   <div className='h-4/6 w-2/3 rounded-r-[4rem] bg-blue-100 shadow-md absolute left-0 top-4 '>
      {/* fond blue */}
   </div>
   <div className='h-4/6 w-2/3 z-10  '>
<img src='https://www.igc-construction.fr/sites/default/files/2020-11/maison-design-avec-terrasse-en-bois.jpg' className='object-fill h-full rounded-r-[4rem] shadow-lg ' />
   </div>
      </div>
     
{/* long speech */}
<div id='about' className='flex flex-col p-4 bg-white justify-between' >
<h1 className='text-blue-400 font-semibold text-[2rem]'>A propos de nous</h1>
<p className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight' >Nous sommes ce que vous recherchez en matiere de <span className='text-blue-500 font-bold'>logement estudiantin</span> en Côte d'ivoire. </p>

<p className='mb-8 text-xl leading-8  tracking-tight md:text-2xl text-gray-500 font-medium '>  
Lancé depuis septembre 2020 avec 18 étudiants ,
Résidence IT connaît un bon succès, Nous hébergeons aujourd’hui plus de 65 étudiants dans nos locaux. Nous disposons actuellement de cinq (5) residence estudiantinne dans la zone d'Abidjan sud.
Aujourd'hui résidence IT est la destination favorite des étudiants de  nombreuses école tels que l'ESATIC et l'INFAS.
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
    <div id='howitworks' className='h-auto mt-8 flex flex-col md:justify-center'>
<h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center capitalize'> Comment ça<span className='text-blue-500 font-bold'> marche</span>  ?</h1>
<p className='mb-8 text-center text-xl leading-8  tracking-tight md:text-2xl text-gray-500 font-medium '>   ici , sont descrits les differentes etapes pour avoir accés a residence IT.          </p>

{/* card qui explique */}
      <div className='flex flex-wrap px-2 gap-2 justify-center mt-8 '>
<div className='  h-96 w-96 md:h-[28rem] md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center ' >
  <div className='bg-black shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImSearch size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize'>verfier la disponiblité d'une residence</p>

</div>
{/* more informatons */}
<p className='mb-8 text-md text-left leading-8  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   
La première étape consiste a vérifier  en fonction de l'emplacement de votre établissement et de votre budget, la disponibilité d'une résidence
Les résidences des hommes et des femmes sont distinctes. Vous devez bien évidemment choisir la residence  en tenant compte de ce paramètre .
     </p>
</div>

<div className=' h-96 w-96 md:h-auto md:w-[28rem] rounded-md shadow-md bg-white hover:bg-blue-600 hover:text-white cursor-pointer p-3' >
{/* icons et titres */}
<div className='flex px-2 items-center' >
  <div className='bg-yellow-500 shadow-md w-20 h-20 rounded justify-center items-center flex'>
<ImHome size={36} color='white' />
  </div>
<p className='mb-6 text-md md:text-lg lg:text-2xl leading-tight font-bold tracking-tight text-center capitalize ml-3'>choisir son forfait.</p>

</div>
{/* more informatons */}
<p className='mb-8 text-center text-md leading-5  tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>  
<ul className='text-left'>

  <li>➢ 
  # offre it-6
     <p>6 par chambre, factures d'eau et electricité prises en charge</p> 
     <p>#  29.000f cfa / mois / personne</p> 
  

  </li>
  <li>➢ 
  # offre it-4
     <p>4 par chambre ,factures d'eau et electricité prises en charge</p> 
     <p>#  39.000f cfa / mois / personne</p> 
  

  </li>
  <li>➢ 
  # offre it-3
     <p>3 par chambre, factures d'eau et electricité prises en charge</p> 
     <p>#  49.000f cfa / mois / personne</p> 
  

  </li>
  <li>➢ 
  # offre it-2
     <p>2 par chambre, factures d'eau et electricité prises en charge</p> 
     <p>#  59.000f cfa / mois / personne</p> 
  

  </li>
</ul>

</p>


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
<p className='mb-8 text-left text-md leading-8  hover:text-white tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   
Prenez le soin d'enregistrer soigneusement vos coordonnées et surtout de préciser votre établissement.
Tâchez aussi de mettre un mail et un contact valide afin que vous puissiez être contacter  en cas de nécessité.
</p>
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
<p className='mb-8 text-left text-md leading-8  hover:text-white tracking-tight md:text-lg mt-8 text-gray-500 font-medium '>   
La dernière étape consiste à visiter votre chambre choisir un lit, effectuer les paiements et signer le contrat.
Aussitôt vous recevez  les clés et un reçu de paiement.

Si vous êtes hors de la ville, pas de panique. Vous avez également la possibilité d'effectuer vos inscriptions à travers la plateforme, sans vous déplacer.
 </p>
</div>



      </div>

    </div>

    {/* les maisons */}
    <div className='h-auto mt-4 flex flex-col md:justify-center '> 
    <h1 className='mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight text-center '> Voici quelqu'unes de nos<span className='text-blue-500 font-bold'> residences</span>  deja fonctionels</h1>
   

<div className='flex flex-wrap px-4 relative gap-3 md:justify-center'>
{ loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   residences.map(residence => (
              <Residence key={residence._id}  residence={residence} />
            )))}
</div>

<div  onClick={moveToResidences} className="w-72 self-center mt-8  p-4 cursor-pointer">
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