import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <div className='headerContent d-flex flex-column justify-content-center align-items-center vh-100 text-white'>
      <p>Dallas Premier Sports Cafè</p>
      <h1>Sports, Fun & Food</h1>
      <a href='#' className='btn btn-primary'>
        Request a Room
      </a>
    </div>
  )
}

export default Header
