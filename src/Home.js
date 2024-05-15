import React from 'react'
import './home.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
  return (
    <div>
      

        <Carousel
            infiniteLoop = {true}
            autoPlay = {true}
            swipeable = {true}
            transitionTime={2000}
           width={'100%'}
           height={'10%'}
              className='header2'>

                
                <div>
                    <img src="DSC02293.JPG" />
                    <p className="carousel-caption d-none d-md-block"><button type="button" class="btn btn-light btn-lg btn-block">Block level button</button></p>

                </div>
                <div>
                    <img src="DSC02294.JPG" />
                    <p className="carousel-caption d-none d-md-block"><button type="button" class="btn btn-light btn-lg btn-block">Block level button</button></p>
                </div>
                <div>
                    <img src="DSC02295.JPG" />
                    <p className="carousel-caption d-none d-md-block"><button type="button" class="btn btn-light btn-lg btn-block">Block level button</button></p>
                </div>
                
            </Carousel>

    </div>
      
  )
}

export default Home