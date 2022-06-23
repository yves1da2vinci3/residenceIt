import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { SpinnerCircular } from 'spinners-react';
import AdminResidenceItem from '../../components/AdminResidenceItem'
import dns from '../../utils/dns';
function SeeAllResidencesScreen() {
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
  return (
    <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
     Espace d'administration des  residences
    </h2>
    <div className="flex flex-wrap -mx-4 mb-24">
    { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   residences.map(residence => (
              <AdminResidenceItem key={residence._id}  residence={residence} />
            )))}
    </div>

  </div>
</section>

  )
}

export default SeeAllResidencesScreen