import { ChevronLeftIcon } from "@heroicons/react/solid"
import { useNavigate } from "react-router-dom"
import { SimpleHeader } from "../shared"

export const BookLayout = props => {

    const router = useNavigate()
    const toRoute = route => router(route)

    const icons = [
        { text: 'Secure Checkout', icon: 'https://media.graphcms.com/6TykeNVERK88y5eYTpXE' },
        { text: 'Flexible Reservation', icon: 'https://media.graphcms.com/OVgPAK90R6WB7rkzZ8N7' },
        { text: 'Trusted Reviews', icon: 'https://media.graphcms.com/1r4Ehz7WSk6qYVgraGje' },
    ]

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="bg-white">
                <SimpleHeader />
                <div className="hidden lg:flex items-center justify-center space-x-5 py-4">
                    {
                        icons.map(dt => (
                            <div className="flex items-center space-x-2">
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
                <ChevronLeftIcon className="h-12 w-auto hover:bg-gray-200 duration-300 rounded-full p-3 cursor-pointer" onClick={() => toRoute(-1)} />
                {props.continue === false ? <button className="btn-disabled">Continue</button>
                    : <button className="btn-info" onClick={() => toRoute(props.nextPage)}>Continue</button>}
            </div>
        </div>
    )
}