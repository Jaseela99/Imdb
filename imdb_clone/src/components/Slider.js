import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./Slider.css"

const slideImages = [
  {
    url: 'https://juju.b-cdn.net/wp-content/uploads/2018/08/Spider-Man-Homecoming-Age-Rating-2017-Movie-Poster-Images-and-Wallpapers.jpg',
    caption: 'Spiderman : HomeComing'
  },
  {
    url: 'https://www.quirkybyte.com/wp-content/uploads/2022/02/BPYoyVW.jpg',
    caption: 'GanguBhai Kathiawadi'
  },
  {
    url: 'https://www.nowrunning.com/content/movie/2021/bhees-25573/Stills/bheeshmaparvam_2022215.jpg',
    caption: 'Bheesham Parvam'
  },
  {
    url: 'https://images.indianexpress.com/2021/12/hey-sinamika-first-look-poster-1200.jpeg',
    caption: 'Hey Sinamika'
  },
  
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div className="slide-image" style={{'backgroundImage': `url(${slideImage.url})`}}>
              <span className="slide-caption">{slideImage.caption}</span>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}
export default Slideshow

