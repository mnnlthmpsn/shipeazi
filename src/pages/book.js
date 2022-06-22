import { CheckCircleIcon } from "@heroicons/react/solid"
import { BookLayout } from "../components/booking"
import { useBook } from "../hooks/useBook"

export const Book = () => {

    const { selectedService, setCurrentService, options } = useBook()

    return (
        <BookLayout continue={selectedService == null ? false : true} nextPage='/forms'>
            <div className="h-auto flex text-center flex-col items-center px-8 py-32 lg:py-0 space-y-8 lg:px-24 h-full justify-center">
                <div className="flex flex-col space-y-2 py-10 lg:py-0">
                    <p className="text-xl lg:text-3xl font-semibold">Choose what you need and book a move online</p>
                    <p>We offer affordable options customizable to your needs</p>
                </div>

                <div className="lg:w-4/5 gap-4 grid md:grid-cols-2 lg:grid-cols-4 items-center">
                    {
                        options.map((option, i) => (
                            <div className={`rounded-lg relative border-2 h-full ${ selectedService === i ? 'border-blue-400 shadow-lg' : 'border-gray-200' } duration-300 cursor-pointer bg-opacity-10 ripple-bg-gray-50`} onClick={() => setCurrentService(i)}>
                                { selectedService === i && <CheckCircleIcon className="absolute top-5 text-blue-500 right-5 h-8 w-auto" />}
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