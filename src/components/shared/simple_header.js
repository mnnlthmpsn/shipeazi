import { useNavigate } from "react-router-dom"

export const SimpleHeader = () => {

    const router = useNavigate()
    const toHome = () => router('/', { replace: true })
    
    return (
        <div className="border-b-4 sticky inset-0 border-blue-600 bg-white">
            <div className="flex justify-between items-center px-4 lg:px-12 h-20">
                <p className="text-2xl font-bold" onClick={toHome}>Shipeazi</p>
                <p>054 060 9437</p>
            </div>
        </div>
    )
}