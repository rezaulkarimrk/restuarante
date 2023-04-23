import React from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';

import { SubHeading } from '../../components'
import {images} from '../../constants'
import './Gallery.css';

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, ]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    console.log(direction);
    if(direction==='left') {
      current.scrollLeft -=300;
    }
    else {
      current.scrollLeft +=300;
    }
  }
  return (
    <div className='app__gallery flex__center' >
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant' >Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTrim: '2rem'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <button type='button' className='custom__button' > view more</button>
      </div>

      <div className='app__gallery-images' >
        <div className='app__gallery-images_container' ref={scrollRef}>
          {
            image.map((img, index) => (
              <div className='app__gallery-images_card  flex__center' key={`gallery_img-${index+1}`} >
                <img src={img} alt="Gallery" />
                <BsInstagram className='gallery__image-icon' />
              </div>
            ))
          }
        </div>
        <div className='app__gallery-images_arrows' >
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>

    </div>
  )
}

export default Gallery;