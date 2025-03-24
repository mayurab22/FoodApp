import React from 'react'
import Navbar from '../Layout/Navbar'
import Banner from './Banner'
import ItemCards from './ItemCards'
import RestoCards from './RestoCards'
import Categories from './Categories'
import Footer from '../Layout/Footer'

function Index() {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <ItemCards></ItemCards>
        <RestoCards></RestoCards>
        <Categories></Categories>
        <Footer></Footer>
    </div>
  )
}

export default Index