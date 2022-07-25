import axios from "axios"
import { useState } from "react"
import { AlertType, showAlert } from "./showAlert"


const usePost = (url: string) => {

    const api_url = import.meta.env.VITE_API_URL

    const [isLoading, setIsLoading] = useState(false)

    const execute = async (payload: any) => {
        var config = {
            method: 'post',
            url: `${api_url}/${url}`,
            headers: { 'Content-Type': 'application/json' },
            data: payload
        }

        try {
            setIsLoading(true)
            const { data } = await axios(config)
            return data
        }
        catch (err: any) {
            switch (err.response.status) {
                case 0:
                    showAlert(AlertType.warning, "Server unreachable")
                case 400:
                    !!err.response.data.validation_error && showAlert(AlertType.warning, "Please fill all required forms")
                case 600:
                    console.log(err.response.data.validation_error)
                    break
                case 601:
                    showAlert(AlertType.error, err.response.data.message)
                    break
                case 602:
                    console.log(err.response)
                    showAlert(AlertType.error, "601")
                    break
                default:
                    console.log(err)
                    showAlert(AlertType.error, err.message)
            }
        } finally {
            setIsLoading(false)
        }
    }

    return { execute, isLoading }
}

export default usePost