import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  'https://www.python.org/static/img/python-logo.png',
  '/images/java.png'
  // TODO: populate this
];

const ProgrammingLanguageSlider = () => {
  return (
    <div className="py-6 px-6 rounded-xl dark:bg-black">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index} className="rounded-md m-auto p-8">
            <div className="rounded-md ">
              <img src={image} alt={`slide ${index + 1}`} className='max-h-64'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgrammingLanguageSlider;
