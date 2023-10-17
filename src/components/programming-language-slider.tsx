import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slidesData = [
  '/images/react.svg',
  '/images/vue.png',
  '/images/vite.png',
  'https://nuts-agency.ru/upload/iblock/c98/c9879095ed083e4a3076480c3573b87f.png',
  'https://res.cloudinary.com/practicaldev/image/fetch/s--m_Ng9MLF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/fppjegg7q1kb2pdzmlvf.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/320px-Nextjs-logo.svg.png',
  'https://www.python.org/static/img/python-logo.png',
  'https://www.creative-tim.com/blog/content/images/wordpress/2020/03/node-js-736399_1280.png',
  '/images/java.png',
  '/images/csharp.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/320px-PHP-logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/320px-HTML5_logo_and_wordmark.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/95px-CSS3_logo_and_wordmark.svg.png',
];

const ProgrammingLanguageSlider = () => {
  return (
    <div className="rounded-xl bg-primary-foreground px-6 py-6">
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
          bulletClass: 'swiper-pagination-bullet bg-secondary-foreground',
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
