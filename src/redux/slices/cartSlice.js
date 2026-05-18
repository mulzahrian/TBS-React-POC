import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.data.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
