import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { setSelectedService } from "../../store/service_slice"

const useBookService = () => {

    const { location, service } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    const selectedService = service.selectedService

    const set_selected_service = (value: string) => dispatch(setSelectedService(value))
    const [showPopUp, setShowPopUp] = useState(false)

    const service_icons = [
        { text: 'Secure Checkout', icon: 'https://media.graphcms.com/6TykeNVERK88y5eYTpXE' },
        { text: 'Flexible Reservation', icon: 'https://media.graphcms.com/OVgPAK90R6WB7rkzZ8N7' },
        { text: 'Trusted Reviews', icon: 'https://media.graphcms.com/1r4Ehz7WSk6qYVgraGje' },
    ]

    const options = [
        {
            title: 'Residential Move',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg',
            slug: 'res_move'
        },
        {
            title: 'Corporate Move',
            message: 'This package includes a team of movers, a 26ft truck and a licensed and insured track driver',
            image: 'https://www.getbellhops.com/book/icons/service/movers.svg',
            slug: 'corp_move'
        },
        {
            title: 'Freight',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg',
            slug: 'freight'
        }

    ]

    const updateLocations = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setShowPopUp(false)
    }

    useEffect(() => {
        !location.destination && !location.pickup && setShowPopUp(true)
    }, [])

    return { service_icons, options, selectedService, set_selected_service, showPopUp, updateLocations }
}

export default useBookService