import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ServiceCardInterface {
    selectedService: string
}

const initialState: ServiceCardInterface = {
    selectedService: ''
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setSelectedService: (state, action: PayloadAction<string>) => {
            state.selectedService = action.payload
        }
    }
})

export const { setSelectedService } = serviceSlice.actions
export default serviceSlice.reducer