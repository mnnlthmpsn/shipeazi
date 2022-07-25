import { useNavigate } from "react-router-dom"

export const useCustomRouter = () => {
    const router = useNavigate()

    const navigateTo = (route: string): void => {
        router(route)
    }

    const goBack = ():void => {
        router(-1)
    }

    return { navigateTo, goBack } 
}