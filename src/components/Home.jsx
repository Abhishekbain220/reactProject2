import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { Context } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/axios'

const Home = () => {
    let [products] = useContext(Context)
    let { search } = useLocation()
    let category = decodeURIComponent(search.split("=")[1])
    console.log(category)
    const [filteredProducts, setFilteredProducts] = useState(null)
    // let getproductscategory = async () => {
    //     try {
    //         let { data } = await axios.get(`/products/category/${category}`)
    //         setFilteredProducts(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useEffect(() => {
        if(!filteredProducts || category == "undefined")setFilteredProducts(products)
            if(category && category != "undefined"){
                // getproductscategory()
                setFilteredProducts(products.filter((p)=>p.category == category) )
            }
    }, [category,products])
    return filteredProducts ? (
        <>
            <Nav />
            <div className='h-screen flex  overflow-y-auto flex-wrap w-[83%] h-[100%]  '>
                {filteredProducts.map((p, i) => {
                    return (
                        <Link key={i} to={`/details/${p.id}`} style={{ backgroundImage: `url(${p.image})` }} className='card relative    hover:scale-110  h-[35%] w-[18%] bg-white flex flex-col items-center ml-5 my-20 '>


                            <h1 className='h-[20%] w-full  absolute bottom-0 flex items-center  text-[70%] justify-center text-center font-semibold hover:text-blue-500  bg-white'>{p.title}</h1>
                        </Link>
                    )
                })}


            </div>
        </>
    ) : (<Loading />

    )
}

export default Home