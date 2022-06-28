import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import useBookLocation from "../../hooks/useLoc";

export const IntroSection = () => {

  const { destination, pick_up, add_destination, add_pickup, getQuote } = useBookLocation()

  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center w-full space-y-14">
        <div className="flex flex-col lg:gap-4 items-center justify-center">
          <p className="text-center font-bold text-white text-3xl lg:text-6xl">Move Anything Hassle Free</p>
          <p className="text-white lg:text-3xl lg:font-bold">Fast, Safe & Reliable</p>
        </div>
        <form className="w-full bg-white h-auto px-8 pt-4 pb-8 rounded-lg grid md:grid-cols-5 gap-y-3 md:gap-x-5" onSubmit={getQuote}>
          <div className="col-span-2">
            <div className="flex gap-2 items-center py-2">
              <ArrowDownIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="">Pick-up Location</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. Dansoman SSNIT Flats" onChange={e => add_pickup(e.target.value)} value={pick_up} required />
          </div>
          <div className="col-span-2">
            <div className="flex gap-2 items-center py-2">
              <ArrowUpIcon className="h-3 w-auto" />
              <label htmlFor="destination" className="">Destination</label>
            </div>
            <input type="text" className="form-control" placeholder="eg. 15 Maseru St. East Legon" onChange={e => add_destination(e.target.value)} value={destination} required />
          </div>
          <div className="col-span-1 h-full flex items-end">
            <button className="btn-quote-sec">Get Quote</button>
          </div>
        </form>
      </div>
    </div>
  );
};
