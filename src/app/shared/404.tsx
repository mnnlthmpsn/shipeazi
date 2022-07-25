import { Header } from "."
import logoLong from '../../assets/images/logo_long.jpg'
import { useCustomRouter } from "../utilities"


export const NotFound = () => {

    const { navigateTo } = useCustomRouter()

    return (
        <>
            <Header />
            <div className="flex flex-col h-screen space-y-10 w-full items-center justify-center">
                <img src={logoLong} alt="logo" className="h-24 w-auto cursor-pointer" />
                <div className="flex flex-col items-center justify-center">
                    <p className="font-bold text-primary">404 ERROR</p>
                    <p className="font-bold text-3xl lg:text-6xl">Page not found</p>
                    <p className="py-2 lg:text-lg text-gray-400">Sorry, we couldn't find the page you're looking for</p>
                    <button className="btn-info mt-5" onClick={() => navigateTo('/')}>Go Back Home</button>
                </div>
            </div>
        </>
    )
}