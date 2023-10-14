import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  'https://www.python.org/static/img/python-logo.png',
  '/images/java.png',
  'https://www.python.org/static/img/python-logo.png',
  'https://www.python.org/static/img/python-logo.png',
  'https://www.python.org/static/img/python-logo.png',
  'https://www.python.org/static/img/python-logo.png',
  // TODO: populate this properly
];

const ProgrammingLanguageSlider = () => {
  return (
    <div className="rounded-xl px-6 py-6 dark:bg-mid-dark">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        centeredSlides={true} // does not seem to work
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-primary',
        }}
        // Keep in mind -- window size is effectively -300 when >md due to sidebar
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {slidesData.map((image, index) => (
          <SwiperSlide key={index} className="m-auto flex justify-center">
            <img
              src={image}
              alt={`slide ${index + 1}`}
              className="mb-10 max-h-64"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgrammingLanguageSlider;
