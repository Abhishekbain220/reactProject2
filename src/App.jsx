import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  let {search,pathname}=useLocation()
  console.log("search",search,"pathname",pathname)
  return (
    <div className='flex h-screen w-full'>
      {(search.length>0 || pathname!= "/")&& (
        <Link  className='absolute left-[20%] top-2' to={"/"}>
        Home
      </Link>
      )}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path='/Details/:id' element={<Details/>}/>
          <Route  path='/create' element={<Create/>}/>
          <Route path='edit/:id' element={<Edit/>}/>
        </Routes>
      
    </div>
  )
}

export default App