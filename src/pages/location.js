import { LocationMarkerIcon, ViewGridAddIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { BookLayout } from "../components/booking"

export const Location = () => {

    const [location, setLocation] = useState({
        starting_loc: '',
        destination: ''
    })

    return (
        <BookLayout continue={location.destination !== "" && location.starting_loc !== "" ? true : false} nextPage='/forms'>
            <div className="h-auto flex text-center flex-col items-center px-8 space-y-8 lg:px-24 h-full justify-center">
                <div className="flex flex-col space-y-2 py-10 lg:py-0">
                    <p className="text-xl lg:text-3xl font-semibold">Enter your location</p>
                    <p className="text-lg">Address information helps us create an accurate estimate.</p>
                </div>

                <form className="w-full lg:w-1/3 space-y-4">
                    <div className="relative outline outline-gray-200 w-full rounded py-4 flex items-center pl-10">
                        <ViewGridAddIcon className="absolute left-5 h-6 w-auto" />
                        <input type="text" onChange={e => setLocation({ ...location, starting_loc: e.target.value })} className="outline-none w-full px-4 h-full text-lg font-semibold text-gray-500" placeholder="Starting Address" />
                    </div>
                    <div className="relative outline outline-gray-200 w-full rounded py-4 flex items-center pl-10">
                        <LocationMarkerIcon className="absolute left-5 h-6 w-auto" />
                        <input type="text" onChange={e => setLocation({ ...location, destination: e.target.value })} className="outline-none w-full px-4 h-full text-lg font-semibold text-gray-500" placeholder="Starting Address" />
                    </div>
                </form>
            </div>
        </BookLayout>
    )
}