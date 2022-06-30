import { Carousel } from 'react-responsive-carousel';

export const Testimonial = () => {
  return (
    <div className="text-gray-800 bg-gray-200 md:px-32 lg:px-0">
      <div className="container">
        <p className="text-2xl lg:text-4xl w-full text-center font-bold pt-16 pb-8">Testimonials</p>
        <div className="m-auto lg:w-2/3 pb-10">
          <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true} interval={5000} >
            {
              [1, 2, 3, 4].map(item => (
                <div key={item} className="mb-8">
                  <p className="text-[#233152] text-lg font-bold text-center tracking-wide">
                    I’ve been using Bellhop since 2015 and have never had a bad
                    experience. Someone asked me recently what company I’m most loyal to,
                    and this is the first one that came to mind. You guys have found a way
                    to turn what is typically a painful experience (moving) into a
                    relatively easy process because your movers are always fast and
                    professional. Thank you!
                  </p>
                  <p className="py-4">Emmanuel Thompson</p>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};
