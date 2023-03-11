import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "../reducers/rootReducer"


export const createAppStore = () => {
    let store = configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production',
    })
    return store
}