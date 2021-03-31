import React, { Component } from 'react'
import PageNavbar from './NavbarComponent'
import '../css/Photos.css'
import { BALCONYPICS } from '../shared/balconyPics'
import { GAMEROOMPICS } from '../shared/gameroomPics'
import { CAFEPICS } from '../shared/cafePics'
import { baseUrl } from '../shared/baseUrl'
// import { box } from '../shared/lightbox'

// FIXME: fix lightbox image popup

function SamplePhotos({ title, pictures }) {
  return (
    <div className='row'>
      <div className='col-12'>
        <h3>{title}</h3>
      </div>
      {pictures.map(picture => (
        <div key={picture.id} className='col-sm-4 sample-photos'>
          <img src={baseUrl + picture.image} alt='' className='img-fluid' />
          <div className='image-overlay image-overlay-blur'>
            <div className='image-title'>{picture.title}</div>
            <p className='img-description'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

class Photos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balconyPics: BALCONYPICS,
      gameroomPics: GAMEROOMPICS,
      cafePics: CAFEPICS
    }
  }

  render() {
    return (
      <>
        <PageNavbar />
        <header className='photosHeader d-flex justify-content-center align-items-center'>
          <h1>Club Photos</h1>
        </header>
        <div className='container mb-5'>
          <SamplePhotos title='Balconies' pictures={this.state.balconyPics} />
          <hr />
          <SamplePhotos title='Game Rooms' pictures={this.state.gameroomPics} />
          <hr />
          <SamplePhotos title='Cafe' pictures={this.state.cafePics} />
        </div>
      </>
    )
  }
}

export default Photos
