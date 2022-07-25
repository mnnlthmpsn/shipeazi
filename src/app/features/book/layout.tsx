import { ChevronLeftIcon } from "@heroicons/react/solid"
import { Header, TestimonialCarousel } from "../../shared"
import { SharedLayoutInterface } from "../../shared/layout"
import { useCustomRouter } from "../../utilities"
import { BookingLayoutInterface, BookQuestionnaireLayoutInterface } from "./interfaces"
import useBookService from "./services"

export const BookingLayout = (props: BookingLayoutInterface) => {

    const { navigateTo, goBack } = useCustomRouter()
    const { service_icons } = useBookService()

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="bg-white">
                <Header />
                <div className="hidden lg:flex items-center justify-center space-x-5 py-4">
                    {
                        service_icons.map((dt, i) => (
                            <div className="flex items-center space-x-2" key={i}>
                                <img src={dt.icon} alt={dt.text} />
                                <p className="text-sm text-gray-600">{dt.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div >
                {props.children}
            </div>

            <div className="sticky bottom-0 lg:static h-24 py-4 lg:py-0 border-t-2 w-full bg-white lg:space-x-72 flex items-center justify-between px-8 lg:justify-center">
                <ChevronLeftIcon className="h-12 w-auto hover:bg-gray-200 duration-300 rounded-full p-3 cursor-pointer" onClick={goBack} />
                {props.continue === false ? <button className="btn-disabled">Continue</button>
                    : <button className="btn-info" onClick={() => navigateTo(props.to)}>Continue</button>}
            </div>
        </div>
    )
}

export const BookQuestionnaireLayout = (props: BookQuestionnaireLayoutInterface) => {
    const { goBack } = useCustomRouter()
    return (
        <div className="kPadding mt-24 flex flex-col justify-center space-y-6 pb-10">
            <div className="flex pt-8 md:px-32 xl:px-96 items-center space-x-4">
                <ChevronLeftIcon className="h-10 w-10 rounded-full border p-2 cursor-pointer hover:bg-gray-100 duration-200" onClick={goBack} />
                <p className="text-lg lg:text-xl font-bold">{props.title}</p>
            </div>

            {props.children}

            <div className="md:px-32 xl:px-96 pt-12">
                <TestimonialCarousel fontColor={'text-black'} />
            </div>
        </div>
    )
}