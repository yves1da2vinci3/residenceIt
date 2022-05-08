import React from 'react'
import {MdOutlineBedroomParent,MdOutlineGroups} from 'react-icons/md'
import {GiPapers} from 'react-icons/gi'

function Residence() {
  return (
<div className='bg-gray-100 w-96 h-[30rem] rounded drop-shadow-lg p-2 cursor-pointer transform hover:-translate-y-4 hover:transition duration-300' >
  {/* image et location */}
<div className='w-full relative'>
  {/* image */}
<img src="https://ws.pap.fr/cdnV1/5238a965b3d55c68833050c7/5238a965b3d55c68833050c7-1468842886-1024x682.jpg" className='h-72 rounded-lg ' />
{/* location */}
<div className='w-auto h-12 bg-white p-2 absolute rounded-full flex justify-center items-center top-0'>
<p className='text-blue-500 leading-6 tracking-tight font-bold '>disponible</p>
</div>
</div>
<h1 className='text-blue-400 leading-6 tracking-tight font-bold mt-2'>abobo Pk18  en face de la grande mosquée</h1>
<h1 className='text-black-400 leading-6 tracking-8 font-bold mt-8'>abobo Pk18  en face de la grande mosquée sffffffffffffff.</h1>

<div className='flex  w-full gap-x-12 absolute bottom-2 '>

  <div className='flex gap-x-2 items-center'>
<MdOutlineBedroomParent color='pink'  size={25}/>
<p className='text-gray-500  font-bold tracking-8 '>
  4 chambres
</p>
  </div>
  <div className='flex gap-x-2 items-center'>
<MdOutlineGroups color='blue'  size={25}/>
<p className='text-gray-500  font-bold tracking-8 '>
  17
</p>
  </div>
  <div className='flex gap-x-2 items-center'>
<GiPapers color='green'  size={25}/>
<p className='text-gray-500  font-bold tracking-8 '>
  3
</p>
  </div>

</div>

</div>
  )
}

export default Residence