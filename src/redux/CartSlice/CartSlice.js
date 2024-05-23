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
            const existingItem = state.items.find(cartItem => cartItem.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }

            state.total += 1;
            state.totalPrice += Number(item.price);

        },
        removeFromCart: (state, action) => {

            const itemId = action.payload.id;
            
            const existingItem = state.items.find(item => item.id === itemId);

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== itemId);
                }
            }

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