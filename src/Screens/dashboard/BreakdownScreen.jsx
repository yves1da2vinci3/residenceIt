import React,{useState,useEffect,useContext} from 'react'
import BreakdownItemOne from '../../components/BreakdownItemOne'
import BreakdownItemTwo from '../../components/BreakdownItemTwo'
import axios from "axios"
import { SpinnerCircular } from 'spinners-react';
import {ModalContext} from '../../context/ModalContext'
import { useNavigate } from 'react-router-dom';
import dns from '../../utils/dns';
function BreakdownScreen() {
  const Navigate = useNavigate()
  const {refreshTable,setrefreshTable} = useContext(ModalContext)
  if(refreshTable){
    setrefreshTable(true)
    Navigate('/admin/request')
  }
  const [loading,SetLoading] = useState(true);
  const [BreakDowns,setBreakDowns] = useState([])
  const token =  localStorage.getItem("UserToken")
  useEffect(() => {
    SetLoading(true)
   const FetchBreakDowns = async () => {
    try {
      const {data} = await axios.get(` ${dns}/api/requests/message`,{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setBreakDowns(data)
      console.log(data)
      SetLoading(false)
    } catch (error) {
      console.log(error)
    }
   }
   FetchBreakDowns()
    },[])
  return (
   <>
        { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> : (   
          
          <section className="bg-gray-50 py-8 px-4 w-full">
          <table className="table-auto w-full bg-white shadow rounded">
          <thead className="border-b border-gray-100">
            <tr>
              <th className="pl-6 py-6 border-r border-gray-200">
                <a className="flex items-center text-xs text-gray-500" >
                  <p>Nom du plaignant</p>
                
                </a>
              </th>
              <th className="pl-6 border-r border-gray-200">
                <a className="flex items-center text-xs text-gray-500" >
                  <p>Residence</p>
                  
                </a>
              </th>
              <th className="pl-6 border-r border-gray-200">
                <a className="flex items-center text-xs text-gray-500" >
                  <p>Type de probleme</p>
                  
                </a>
              </th>
            
           
              <th className="pl-6">
                <a className="flex items-center text-xs text-gray-500" >
                  <p>Description</p>
               
                </a>
              </th>
              <th className="pl-6 border-r border-gray-200">
                <a className="flex items-center text-xs text-gray-500" >
                  <p>date</p>
                  
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
         { BreakDowns.map( breakdown =>(
             BreakDowns.indexOf(breakdown) % 2 ===0 ? <BreakdownItemTwo key={breakdown._id} breakdown={breakdown}  />  : <BreakdownItemOne breakdown={breakdown}  key={breakdown._d} />
         ))  }
           
            
          </tbody>
        </table>
        </section>
            
            
            )}


</>
  )
}

export default BreakdownScreen