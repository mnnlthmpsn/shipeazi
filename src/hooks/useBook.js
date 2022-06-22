import { useSelector, useDispatch } from "react-redux"
import { selectService } from "../globStore/slices/serviceSlice"

export const useBook = () => {

    const { service: { selectedService }} = useSelector(state => state)
    const dispatch = useDispatch()

    const setCurrentService = i => {
        dispatch(selectService(i))
    }

    const options = [
        {
            title: 'Residential Move',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg'
        },
        {
            title: 'Corporate Move',
            message: 'This package includes a team of movers, a 26ft truck and a licensed and insured track driver',
            image: 'https://www.getbellhops.com/book/icons/service/movers.svg'
        },
        {
            title: 'Freight',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg'
        },
        {
            title: 'Packaging Service',
            message: 'This packages offers only movers, and is perfefct for unloading/loading a storage unit or rearranging furniture in your new home',
            image: 'https://www.getbellhops.com/book/icons/service/labor.svg'
        }
        
    ]

    return { selectedService, setCurrentService, options }
}