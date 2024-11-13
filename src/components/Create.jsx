import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { Context } from '../utils/Context'
import { json, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
  let [products, setProducts] = useContext(Context)
  let navigate=useNavigate()
  const [image, setImage] = useState("")
  const [title, settitle] = useState("")
  const [price, setPrice] = useState()
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  let submitHandler = async(e) => {
    e.preventDefault()
    let newProduct = {
      id: nanoid(),
      image: image,
      title,
      price,
      category,
      description
    }
     setProducts([...products, newProduct])
     localStorage.setItem("products",JSON.stringify([...products, newProduct]))
     toast.success("product Created Successfully")
    navigate("/")

  }
  console.log(products)
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <form onSubmit={submitHandler}>
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Product</h1>

          <input
            type="url"
            name="image"
            placeholder="Enter Image Link"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />

          <input
            type="number"
            name="price"
            placeholder="Enter Price"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            name="category"
            placeholder="Enter Category"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <textarea
            name="description"
            placeholder="Enter Description"
            className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default Create