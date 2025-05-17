import React from 'react'
import Navbar from '../Component/Navbar'
import Gallery from '../Component/Gallery'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container p-5 d-flex justify-content-center align-items-center flex-column'>
      <h1 className='display-1 mt-5'>404</h1>
      <h1 className='display-3'>PAGE NOT FOUND</h1>
      <Link to='/' className='border-bottom border-2 border-primary'>Go To Home</Link>
    </div>
  )
}

export default PageNotFound