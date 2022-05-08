import React from 'react'
import {FaEye} from 'react-icons/fa'
import {MdLocationPin,MdPinDrop} from 'react-icons/md'
import ResidenceItem from '../components/ResidenceItem'
function ResidenceScreen() {
  return (
    <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">
      Decouvrez toutes nos residences
    </h2>
    <div className="flex flex-wrap -mx-4 mb-24">
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
<ResidenceItem IsAvailable={true} />
<ResidenceItem />
    </div>
    <div className="text-center">
      <a
        className="inline-block bg-blue-300 hover:bg-blue-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
        href="#"
      >
        voir plus
      </a>
    </div>
  </div>
</section>

  )
}

export default ResidenceScreen