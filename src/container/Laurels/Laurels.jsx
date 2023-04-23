import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';


const AwardCart = ({award : {imgUrl, title, subtitle}}) => {
  return (<div className='app__laurels-awards-cart'>
            <img src={imgUrl} alt="awards" />
            <div className='app__laurels_awards-card_content' >
              <p className='p__cormorant' style={{color: '#DCCA87'}} >{title}</p>
              <p className='p__cormorant' >{subtitle}</p>
            </div>
          </div>)
}

const Gallery = () => (
  <div className='app__bg app__wrapper section__padding' id='awards' >
    <div className='app__wrapper_info' >
       <SubHeading title="Awards & Recognetion" />
       <h1 className='headtext__cormorant' >Ours Laurels</h1>

       <div className='app__laurels_awards' >
         {
          data.awards.map((award) =>  <AwardCart  award={award} key={award.title} />)
         }
       </div>
    </div>
    <div className='app__wrapper_img' >
       <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Gallery;
