import React from 'react'
import PageNavbar from './NavbarComponent'
import '../css/Pricing.css'
import gameroomPoolTableSm from '../assets/images/gamerooms/gameroom-pool-table-sm.jpg'
import meetingRoomSm from '../assets/images/meetings/meeting-room-sm.jpg'
import cafe1Sm from '../assets/images/cafe/cafe-1-sm.jpg'

function SpaceCards({ image, title, price }) {
  // TODO: make media boxes smaller for mobile
  return (
    <div className='row mt-4 pricingRow'>
      <div className='col'>
        <div className='media mb-5'>
          <div className='media-image'>
            <img src={image} className='img-thumbnail' alt='' />
          </div>
          <div className='media-body'>
            <h2 className='mt-3'>{title}</h2>
            {price}
            <br />
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
              laborum doloremque? Cupiditate labore minima perspiciatis,
              laudantium molestias commodi ad exercitationem.
            </p>
            <a href='#' className='btn btn-primary mb-2'>
              Reserve
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Pricing() {
  return (
    <>
      <PageNavbar />
      <header className='priceHeader d-flex justify-content-center align-items-center'>
        <h1>Member Pricing</h1>
      </header>
      <div className='container'>
        <p className='lead text-center'>Reserve Your Space Today</p>
        <SpaceCards
          image={gameroomPoolTableSm}
          title={'Day Pass'}
          price={'$20/day'}
        />
        <SpaceCards
          image={meetingRoomSm}
          title={'Virtual Office Membership'}
          price={'$50/month'}
        />
        <SpaceCards
          image={cafe1Sm}
          title={'Cafe Club Membership'}
          price={'$99/month'}
        />
      </div>
    </>
  )
}

export default Pricing
