import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedService: null
}

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        selectService: (state, action) => {
            state.selectedService = action.payload
        }
    }
})

export default serviceSlice.reducer
export const { selectService } = serviceSlice.actions