import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PageLayout = ({children}) => {
  return (
    <div className='bg-[#F9F6EE]'>
        <Navbar/>
        {children}
        <Footer/>

    </div>
  )
}

export default PageLayout