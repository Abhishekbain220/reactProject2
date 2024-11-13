import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../utils/Context'

const Nav = () => {
    let [products] = useContext(Context)
    let distinctCategory = products.reduce((acc, cv) => {
        return ( 
            [...acc, cv.category]
        )
    }, [])
    distinctCategory = [... new Set(distinctCategory)]
    let color = () => {
        return (
            `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()})`
        )
    }
    return (
        <div className='w-[18%]'>
            <nav className='h-screen  h-[100%]   pt-5 flex flex-col items-center'>
                <Link className='  border-[1px] border-black px-5 py-2' to={"/create"}>Add new Product</Link>
                <hr className='  w-[80%] mt-3 h-[2px]  bg-black' />
                <h1 className='w-[80%] font-semibold text-xl mt-3'>Category Filter</h1>
                <div className='w-[80%]'>
                    {distinctCategory.map((elem, i) => {
                        return (
                            <Link to={`?category=${elem}`} key={i} className=' flex items-center  w-[90%] mt-2 pl-2'>
                                <span style={{ backgroundColor: color()  }} className='block h-[10px] w-[10px] rounded-full mr-1'></span>
                                <span className='ml-2'>{elem}</span>

                            </Link>

                        )
                    })}

                </div>




            </nav>
        </div>
    )
}

export default Nav