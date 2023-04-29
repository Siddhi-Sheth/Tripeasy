import SwiperCore, { Navigation,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './css/Explore.css';

SwiperCore.use([Navigation,A11y ])
const Explore = (Props) => {
    const Exp_data = Props.props
    
  return (
    <div className='Explore'>
        <h4>More to Explore</h4>
        <Swiper 
            spaceBetween={5}
            slidesPerView={3}
            breakpoints={{
                // when window width is >= 640px
                320: {
                    width: 320,
                    slidesPerView: 0.9,
                  },
                640: {
                  width: 640,
                  slidesPerView: 1.5,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {Exp_data.map((feature) => (
                <SwiperSlide className="slide" key={feature.Id}>
                    <div className='slide-content'>
                        <div className='img-div'>
                            <img src={feature.img} alt='exp1' className='slide-img'  />
                        </div>
                        <h5>{feature.url}</h5>
                    </div>
                </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default Explore