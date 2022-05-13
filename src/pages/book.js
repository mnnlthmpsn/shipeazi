import { CheckCircleIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { BookLayout } from "../components/booking"

export const Book = () => {

    const [ active, setActive ] = useState(null)

    const options = [
        {
            title: 'Truck & Movers',
            message: 'This package includes a team of movers, a 26ft truck and a licensed and insured track driver',
            image: 'https://www.getbellhops.com/book/icons/service/movers.svg'
        },
        {
            title: 'Movers only',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg'
        }
    ]

    return (
        <BookLayout continue={active == null ? false : true} nextPage='/location'>
            <div className="h-auto flex text-center flex-col items-center px-8 my-24 lg:my-0 py-32 lg:py-0 space-y-8 lg:px-24 h-full justify-center">
                <div className="flex flex-col space-y-2 py-10 lg:py-0">
                    <p className="text-xl lg:text-3xl font-semibold">Choose what you need and book a move online</p>
                    <p>We offer affordable options customizable to your needs</p>
                </div>

                <div className="lg:w-2/5 gap-4 grid lg:grid-cols-2 items-center">
                    {
                        options.map((option, i) => (
                            <div className={`rounded-lg relative border-2 h-full ${ active === i ? 'border-blue-400 shadow-lg' : 'border-gray-200' } duration-300 cursor-pointer bg-opacity-10 ripple-bg-gray-50`} onClick={() => setActive(i)}>
                                { active === i && <CheckCircleIcon className="absolute top-5 text-blue-500 right-5 h-8 w-auto" />}
                                <img src={option.image} alt={option.title} />
                                <div className="px-6 py-6 space-y-3 w-full">
                                    <p className="text-left text-sm lg:text-base font-bold">{option.title}</p>
                                    <p className="text-left tracking-wide text-sm">{option.message}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </BookLayout>
    )
}