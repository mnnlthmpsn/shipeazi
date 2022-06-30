import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { Carousel } from 'react-responsive-carousel';

import useBookLocation from "../../hooks/useLoc";

export const IntroSection = () => {

  const { destination, pick_up, add_destination, add_pickup, getQuote } = useBookLocation()

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-evenly h-screen w-full lg:pt-12 ">
        <div className="flex flex-col lg:gap-4 items-center justify-center">
          <p className="text-center font-bold text-white text-3xl md:text-4xl lg:text-6xl">Move Anything Hassle Free</p>
          <p className="text-white md:text-3xl lg:font-bold">Fast, Safe & Reliable</p>
        </div>
        <div className="space-y-3 lg:space-y-0 lg:flex lg:gap-6 w-full bg-white px-8 pt-4 pb-8 rounded-lg">
          {/* origin */}
          <div className="flex grow flex-col">
            <div className="flex gap-2 items-center py-2">
              <ArrowDownIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="">Origin</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. Dansoman SSNIT Flats" onChange={e => add_pickup(e.target.value)} value={pick_up} required />
          </div>

          {/* destination */}
          <div className="flex grow flex-col">
            <div className="flex gap-2 items-center py-2">
              <ArrowUpIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="">Destination</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. 15 Maseru St. East Legon" onChange={e => add_destination(e.target.value)} value={destination} required />
          </div>

          {/* button */}
          <div>
            <div className="lg:py-5"></div>
            <button className="btn-quote-sec">Get Quote</button>
          </div>
        </div>
        <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false} infiniteLoop={true} interval={5000} className="hidden md:block" >
          {
            [1, 2, 3, 4].map(item => (
              <div key={item} className="mb-6">
                <p className="text-white font-light text-center tracking-wide">
                  I’ve been using Bellhop since 2015 and have never had a bad
                  experience. Someone asked me recently what company I’m most loyal to,
                  and this is the first one that came to mind
                </p>
                <p className="py-4 text-white font-thin text-sm">Emmanuel Thompson</p>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};
