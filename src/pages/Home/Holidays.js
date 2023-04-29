import SwiperCore, { Navigation,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './css/Holiday.css';

SwiperCore.use([Navigation,A11y ])

const Holidays = (Props) => {
    const Holiday_data = Props.props
    
  return (
    <div className='Holiday'>
        <h4>Top destinations for your next holiday</h4>
        <p>Here's where your fellow travellers are headed</p>
        <Swiper 
            spaceBetween={4}
            slidesPerView={3.5}
            breakpoints={{
                // when window width is >= 640px
                320: {
                    width: 320,
                    slidesPerView: 1,
                  },
                640: {
                  width: 640,
                  slidesPerView: 1.8,
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
            {Holiday_data.map((feature) => (
                <SwiperSlide key={feature.Id}>
                    <div className='content-div'>
                        <div className='img-div'>
                            <img src={feature.img} alt='exp1' className='picture' />
                        </div>
                        <div className='location'>
                            <h5>{feature.location}</h5>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
        </Swiper>
    </div>
  )
}

export default Holidays