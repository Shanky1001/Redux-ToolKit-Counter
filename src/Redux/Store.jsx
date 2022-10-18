import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter/CounterSlice";


export const Store = configureStore({
    reducer: {
        counter: counterSlice
    }
})