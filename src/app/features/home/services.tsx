import { useCustomRouter } from "../../utilities"
import { useDispatch } from 'react-redux'

// import actions
import { setDestination, setPickup } from "../../store/location_slice"

const useHomeService = () => {

    const { navigateTo } = useCustomRouter()
    const dispatch = useDispatch()

    const set_destination = (value: string) => dispatch(setDestination(value))
    const set_pickup = (value: string) => dispatch(setPickup(value))

    const getQuote = (e: React.SyntheticEvent) => {
        e.preventDefault()
        navigateTo('book')
    }

    return { set_pickup, set_destination, getQuote }
}

export default useHomeService