import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  'https://www.python.org/static/img/python-logo.png',
  '/images/java.png',
  // TODO: populate this
];

const ProgrammingLanguageSlider = () => {
  return (
    <div className="rounded-xl px-6 py-6 dark:bg-black">
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
          <SwiperSlide key={index} className="m-auto rounded-md p-8">
            <div className="rounded-md ">
              <img
                src={image}
                alt={`slide ${index + 1}`}
                className="max-h-64"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgrammingLanguageSlider;
