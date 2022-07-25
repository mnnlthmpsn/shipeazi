import { CheckCircleIcon } from "@heroicons/react/solid"
import { Outlet } from "react-router-dom"
import { LocationBottomSheet } from "./components"
import { BookingLayout } from "./layout"
import useBookService from "./services"

const Booking = () => {

    const { options, selectedService, set_selected_service, showPopUp } = useBookService()

    return (
        <>
            <LocationBottomSheet />
            <BookingLayout continue={!!selectedService} to={`/book/${selectedService}`}>
                <div className="h-auto flex text-center flex-col items-center px-8 py-32 lg:py-0 space-y-8 lg:px-24 h-full justify-center">
                    <div className="flex flex-col space-y-2 py-10 lg:py-0">
                        <p className="text-xl lg:text-3xl font-semibold">Choose what you need and book a move online</p>
                        <p>We offer affordable options customizable to your needs</p>
                    </div>

                    <div className="xl:w-3/5 gap-4 grid md:grid-cols-3 items-center">
                        {
                            options.map((option, i) => (
                                <div key={i} className={
                                    `rounded-lg relative border-2 h-full 
                                ${selectedService === option.slug ?
                                        'border-blue-400 shadow-lg'
                                        : 'border-gray-200'} duration-300 cursor-pointer 
                                bg-opacity-10 ripple-bg-gray-50`
                                }
                                    onClick={() => set_selected_service(option.slug)}>
                                    {selectedService === option.slug && <CheckCircleIcon className="absolute top-5 text-blue-500 right-5 h-8 w-auto" />}
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
            </BookingLayout>
        </>
    )
}

export default Booking