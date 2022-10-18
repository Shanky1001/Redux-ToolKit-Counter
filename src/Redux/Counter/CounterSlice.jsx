import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counterReducer', initialState,
    reducers: {

        increase: (state) => {
            state.count++;
        },
        decrease: (state) => {
            if (state.count <= 0)
                alert("Counter can't go below zero!")
            else
                state.count--;
        },
        increaseBy: (state, action) => {
            if(+action.payload < 0){
                alert("Counter can't go below zero. try adding other value!")
            }else
            state.count += action.payload;
        },
        decreaseBy: (state, action) => {
            if (action.payload > state.count)
                alert("Can't decrease more than available count!!")
            else
                state.count -= action.payload
        },
        reset: (state) => {
            state.count = 0;
        }

    }
})

export const { increase, decrease, increaseBy, decreaseBy, reset } = counterSlice.actions
export default counterSlice.reducer