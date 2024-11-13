import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../utils/Context'

const Edit = () => {
    let [products, setProducts] = useContext(Context)
    let navigate=useNavigate()
    let {id}=useParams()
    const [Product, setProduct] = useState({
      image:"",
      title:"",
      price:"",
      category:"",
      description:""
    })
    let changeHandler=(e)=>{
      console.log(e.target.name,e.target.value)
      setProduct({...Product,[e.target.name]:e.target.value})
    }
    

    useEffect(()=>{
        setProduct(products.filter((p)=> p.id == id )[0])
    },[id])
    console.log(Product)

    let submitHandler = async(e) => {
      e.preventDefault()
      // let newProduct = {
      //   id: nanoid(),
      //   image: image,
      //   title,
      //   price,
      //   category,
      //   description
      // }
      //  setProducts([...products, newProduct])
      //  
      // navigate("/")
      let pi=products.findIndex((p)=> p.id == id )
      let copyData=[...products]
      copyData[pi]={...products[pi],...Product}
      setProducts(copyData)
      localStorage.setItem("products",JSON.stringify(copyData))
      navigate(-1)
      
  
    }
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={submitHandler}>
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Edit Product</h1>

          <input
            type="url"
            name="image"
            placeholder="Enter Image Link"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Product && Product.image}
            onChange={changeHandler}
          />

          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Product && Product.title}
            onChange={changeHandler}
          />

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Product && Product.price}
            onChange={changeHandler}
          />

          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Product && Product.category}
            onChange={changeHandler}
          />

          <textarea
            name="description"
            placeholder="Enter Description"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={Product && Product.description}
            onChange={changeHandler}
          ></textarea>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Edit