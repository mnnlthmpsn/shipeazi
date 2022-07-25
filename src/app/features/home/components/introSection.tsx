import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { TestimonialCarousel } from "../../../shared";

// all logic here
import useHomeService from "../services";

export const IntroSection = () => {

  const { getQuote, set_pickup, set_destination } = useHomeService()

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-evenly h-screen w-full lg:pt-12 ">
        <div className="flex flex-col lg:gap-4 items-center justify-center">
          <p className="text-center font-bold text-white text-3xl md:text-4xl lg:text-6xl">Move Anything Hassle Free</p>
          <p className="text-white md:text-3xl lg:font-bold">Fast, Safe & Reliable</p>
        </div>
        <form className="space-y-3 lg:space-y-0 lg:flex lg:gap-6 w-full bg-white px-8 pt-4 pb-8 rounded-lg" onSubmit={getQuote}>
          {/* origin */}
          <div className="flex grow flex-col">
            <div className="flex gap-2 items-center py-2">
              <ArrowDownIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="font-semibold">Origin</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. Dansoman SSNIT Flats" onChange={e => set_pickup(e.target.value)} required />
          </div>

          {/* destination */}
          <div className="flex grow flex-col">
            <div className="flex gap-2 items-center py-2">
              <ArrowUpIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="font-semibold">Destination</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. 15 Maseru St. East Legon" onChange={e => set_destination(e.target.value)} required />
          </div>

          {/* button */}
          <div>
            <div className="lg:py-5"></div>
            <button className="btn-quote-sec" type='submit'>Get Quote</button>
          </div>
        </form>

        <TestimonialCarousel />
      </div>
    </div>
  );
};
