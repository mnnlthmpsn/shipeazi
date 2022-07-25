import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid"
import useHomeService from "../../home/services"
import useBookService from "../services"


export const LocationBottomSheet = () => {

    const { set_pickup, set_destination } = useHomeService()
    const { updateLocations, showPopUp } = useBookService()

    return (
        <div className={`fixed z-10 items-center justify-center h-screen w-screen backdrop-blur-lg bg-white/30 ${showPopUp ? 'flex' : 'hidden'}`}>
            <div className="container space-y-4">
                <p className="font-bold text-center lg:text-2xl">Please Enter Origin and Destination for move</p>
                <form className="space-y-3 lg:space-y-0 lg:flex lg:gap-6 w-full bg-white px-8 pt-4 pb-8 rounded-lg" onSubmit={updateLocations}>
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
                        <button className="btn-quote-sec" type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
