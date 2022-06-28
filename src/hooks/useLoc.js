import { setDestination, setPickUpLocation } from "../globStore/slices/locationSlice"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useBookLocation = () => {
    const { location: { pick_up, destination } } = useSelector(state => state)
    const dispatch = useDispatch()
    const router = useNavigate()

    const add_destination = value => dispatch(setDestination(value))

    const add_pickup = value => dispatch(setPickUpLocation(value))

    const getQuote = e => {
        e.preventDefault()
        router('/book')
    }

    return { add_destination, add_pickup, pick_up, destination, getQuote }
}

export default useBookLocation