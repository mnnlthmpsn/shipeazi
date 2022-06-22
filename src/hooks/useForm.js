import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ResidentialMovingForm, CorporateMovingForm, FreightForm, PackagingForm } from "../components/forms"

const useForm = () => {
    const { service: { selectedService } } = useSelector(state => state)
    const router = useNavigate()

    const forms = {
        0: <ResidentialMovingForm />,
        1: <CorporateMovingForm />,
        2: <FreightForm />,
        3: <PackagingForm />
    }

    const activeForm = forms[selectedService]

    useEffect(() => {
        selectedService === null && router('/book')
    }, [])

    return { activeForm }
}

export default useForm