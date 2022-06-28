import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pick_up: "",
    destination: ""
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setPickUpLocation: (state, action) => {
            state.pick_up = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        }
    }
})

export default locationSlice.reducer
export const { setPickUpLocation, setDestination } = locationSlice.actions