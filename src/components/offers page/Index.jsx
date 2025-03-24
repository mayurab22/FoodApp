import React from 'react'
import Navbar from '../Layout/Navbar'
import Banner from './Banner'
import Filter from './Filter'
import RestoList from './RestoList'
import Footer from '../Layout/Footer'

function Index() {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <Filter></Filter>
        <RestoList></RestoList>
        <Footer></Footer>
    </div>
  )
}

export default Index