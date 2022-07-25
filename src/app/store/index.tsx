import { configureStore } from "@reduxjs/toolkit";
import locationReducer from './location_slice'
import serviceReducer from './service_slice'

export const store = configureStore({
    reducer: {
        location: locationReducer,
        service: serviceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch