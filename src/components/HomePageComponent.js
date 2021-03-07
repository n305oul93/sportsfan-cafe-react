import React from 'react'
import HomePageNavbar from './HomePageNavbarComponent'
import Header from './HeaderComponent'
import '../css/HomePage.css'

function HomePage() {
  return (
    <>
      <HomePageNavbar />
      <div className='home-page'>
        <Header />
      </div>
    </>
  )
}

export default HomePage
