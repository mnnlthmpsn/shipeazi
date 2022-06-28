import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from '../globStore/slices/serviceSlice'
import locationReducer from '../globStore/slices/locationSlice'

const store = configureStore({
    reducer: {
        service: serviceReducer,
        location: locationReducer
    }
})

export default store