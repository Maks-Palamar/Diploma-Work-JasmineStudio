import { createSlice, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../MainMenuSlice/MainMenuSlice";
// import { selectDishes } from "./MainMenuSlice";

const CartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE.cart,
    reducers: {
        cartDishes(state, action) {
            state.items = action.payload
        },
        addToCart: (state, action) => {
            const item = action.payload;
            state.items.push(item);
            state.total += 1;
            state.totalPrice += parseFloat(item.price);
        },
        removeFromCart: (state, action) => {
            // const itemId = action.payload;
            // const item = state.items.find(item => item.id === itemId);
            // if (item) {
            //     state.items = state.items.filter(item => item.id !== itemId);
            //     state.total -= 1;
            //     state.totalPrice -= item.price;
            // }

            const itemId = action.payload.id;
            state.items = state.items.filter(item => item.id !== itemId);
            state.total -= 1;
            state.totalPrice -= parseFloat(action.payload.price);
        },
    }
})

export const selectCart = state => state.cart.items;
export const selectCartTotal = state => state.cart.total;
export const selectTotalPrice = state => state.cart.totalPrice;
export const { cartDishes, addToCart, removeFromCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;