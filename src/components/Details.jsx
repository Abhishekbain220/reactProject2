import React, { useContext, useEffect, useState } from 'react'
import DButton from './DButton'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import Loading from './Loading'
import { Context } from '../utils/Context'
import { toast } from 'react-toastify'

const Details = () => {
  const {id}= useParams()
  const [single, setsingle] = useState(null)
  let [products,setProducts]=useContext(Context)
  let navigate=useNavigate()
  // let getsingleproduct=async ()=>{
  //   try {
  //     let {data}=await axios.get(`/products/${id}`)
  //     setProducts(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    
  
    // getsingleproduct()
    if(!single){
      setsingle(products.filter((p)=> p.id == id)[0])
    }
  }, [])
  let deleteHandler=(id)=>{
    let filterProducts=products.filter((p)=>p.id != id)
    setProducts(filterProducts)
    localStorage.setItem("products",JSON.stringify(filterProducts))
    toast.success("Product Deleted")
    navigate("/")
  }
  

  return single ?(
    <div className='h-screen w-full flex justify-center items-center'>
      <div className=' h-[45%] flex  w-[60%]'>
        <img className='h-full w-1/2 object-contain' src={single.image} alt="" />
        <div className='w-1/2 h-full   pt-[5%] '>
          <h1 className='text-2xl font-semibold w-[70%] '>{single.title}</h1>
          <p className='my-2' >{single.category}</p>
          <p className='my-2'>{single.price}</p>
          <p className='w-[90%]'>{single.description}</p>
          <div className='flex gap-4 pt-4'>
            <Link to={`/edit/${single.id}`} className='border-black border-[1px] py-1 px-6 text-1xl'>Edit</Link>
            <button className='border-black border-[1px] py-1 px-6 text-1xl' onClick={()=>deleteHandler(single.id)} >Delete</button>
          </div>
        </div>
      </div>
    </div>
  ):(<Loading/>)
}

export default Details