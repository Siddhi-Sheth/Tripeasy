// // import Swiper core and required modules
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import Exp_data from './Exp_data';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// SwiperCore.use([Navigation,Pagination,Scrollbar, A11y ])
// const Experience = (Props) => {
//     const Exp_data = Props.props
//   return (
//     <Swiper
//       // install Swiper modules
//       spaceBetween={20}
//       slidesPerView={4}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       {/* <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       <SwiperSlide>Slide 6</SwiperSlide>
//       <SwiperSlide>Slide 7</SwiperSlide> */}
   
//             {Exp_data.map((feature) => (
//                 <SwiperSlide className="slide">
//                 <div className='slide-content'>
//                 <div className='user-img'>
//                     <img src='./images/Experience/travEx1.jpg' alt='exp1' className='user-photo'  />
//                 </div>
//                 <h5>{feature.place}</h5>
//                 <p className='user-testinomial'>
//                     " <i>{feature.place}</i>"
//                 </p>
//             </div>
//             </SwiperSlide>
//           ))}
//     </Swiper>
//   )
// }

// export default Experience