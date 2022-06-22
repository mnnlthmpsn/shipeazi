import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from '../globStore/slices/serviceSlice'

const store = configureStore({
    reducer: {
        service: serviceReducer
    }
})

export default store