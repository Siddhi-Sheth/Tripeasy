import SwiperCore, { Navigation,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './css/World.css'

SwiperCore.use([Navigation,A11y ])
const World = (Props) => {
    const Exp_data = Props.props
    
  return (
    <div className='Tours'>
        <h4>Explore Disneyland</h4>
        <Swiper 
            spaceBetween={15}
            slidesPerView={4}
            breakpoints={{
                // when window width is >= 640px
                320: {
                    width: 320,
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                640: {
                  width: 640,
                  slidesPerView: 2,
                  spaceBetween:18
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2.3,
                },
              }}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {Exp_data.map((feature) => (
                <SwiperSlide className="slide" key={feature.Id}>
                    <div className='swiper-whole-div'>
                        <div className='tour-img'>
                            <img src={feature.img} alt={feature.img}/>
                        </div>
                        <div className='tour-info'>
                            <h6 className='tour-place'>{feature.location}</h6>
                            {/* <p className='tour-rating'><span class="material-symbols-outlined">star</span><span class="material-symbols-outlined">star</span></p> */}
                            <p>from {feature.cost} per {feature.journey}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default World