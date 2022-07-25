import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LocationInterface {
    pickup: string
    destination: string
}

const initialState: LocationInterface = {
    pickup: '', destination: ''
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        // actions
        setPickup: (state, action: PayloadAction<string>) => {
            state.pickup = action.payload
        },
        setDestination: (state, action: PayloadAction<string>) => {
            state.destination = action.payload
        }
    }
})

export const { setPickup, setDestination } = locationSlice.actions
export default locationSlice.reducer