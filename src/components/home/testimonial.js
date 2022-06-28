import { AnnotationIcon } from "@heroicons/react/solid";

export const Testimonial = () => {
  return (
    <div className="bg-gray-50 md:px-32 lg:px-0">
      <div className="container">
        <div className="lg:px-48 flex flex-col space-y-8 lg:space-y-16 items-center">
          <AnnotationIcon className="text-[#233152] h-8 w-auto lg:h-16" />
          <p className="text-[#233152] text-lg lg:text-2xl text-center tracking-wide">
            I’ve been using Bellhop since 2015 and have never had a bad
            experience. Someone asked me recently what company I’m most loyal to,
            and this is the first one that came to mind. You guys have found a way
            to turn what is typically a painful experience (moving) into a
            relatively easy process because your movers are always fast and
            professional. Thank you!
          </p>
          <p className="text-gray-500 lg:text-lg font-light">- Emmanuel Thompson</p>
        </div>
      </div>
    </div>
  );
};
