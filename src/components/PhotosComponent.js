import React, { Component } from 'react'
import PageNavbar from './NavbarComponent'
import '../css/Photos.css'
import { BalconyPics } from '../shared/balconyPics'
import { GameroomPics } from '../shared/gameroomPics'
import { CafePics } from '../shared/cafePics'
import '../shared/lightbox'
// FIXME: remove and use state values
import balcony3Sm from '../assets/images/balconies/balcony-3-sm.jpg'
import balcony2Sm from '../assets/images/balconies/balcony-2-sm.jpg'
import balcony1Sm from '../assets/images/balconies/balcony-1-sm.jpg'

// FIXME: fix lightbox image popup

function SamplePhotos({ title, image }) {
  return (
    <div className='row'>
      <div className='col-12'>
        <h3>{title}</h3>
      </div>
      <div className='col-sm-4 sample-photos'>
        {/* FIXME: use state values */}
        <img src={balcony3Sm} alt='' className='img-fluid' />
        <div className='image-overlay image-overlay-blur'>
          <div className='image-title'>Balcony 1</div>
          <p className='img-description'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className='col-sm-4 sample-photos'>
        {/* FIXME: use state values */}
        <img src={balcony2Sm} alt='' className='img-fluid' />
        <div className='image-overlay image-overlay-blur'>
          <div className='image-title'>Balcony 2</div>
          <p className='img-description'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className='col-sm-4 sample-photos'>
        {/* FIXME: use state values */}
        <img src={balcony1Sm} alt='' className='img-fluid' />
        <div className='image-overlay image-overlay-blur'>
          <div className='image-title'>Balcony 3</div>
          <p className='img-description'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  )
}

class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balconyPics: BalconyPics,
      gameroomPics: GameroomPics,
      cafePics: CafePics
    }
  }

  render() {
    return (
      <>
        <PageNavbar />
        <header className='photosHeader d-flex justify-content-center align-items-center'>
          <h1>Club Photos</h1>
        </header>
        <div className='container'>
          {/* FIXME: use state values */}
          <SamplePhotos title='Balconies' image={this.state.balconyPics} />
          {/* <SamplePhotos title='Game Rooms' image={this.state.gameroomPics} /> */}
          {/* <SamplePhotos title='Cafe' image={this.state.cafePics} /> */}
        </div>
      </>
    )
  }
}

export default Photos
