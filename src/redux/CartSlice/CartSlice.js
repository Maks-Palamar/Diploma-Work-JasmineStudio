import { createSlice, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../MainMenuSlice/MainMenuSlice";
import { fetchTotalOrders } from "../MainMenuSlice/MainMenuOps";
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
                    state.total -= 1;
                    state.totalPrice -= parseFloat(action.payload.price);
                } else {
                    state.items = state.items.filter(item => item.id !== itemId);
                    state.total -= 1;
                    state.totalPrice -= parseFloat(existingItem.price);
                }
            }

            
        },
        resetCart (state) {
            state.items = [];
            state.total = 0;
            state.totalPrice = 0;
        },
        setTable (state, action) {
            state.table = action.payload
        }
    }
})

const totalOrderSlice = createSlice({
    name: "total",
    initialState: INITIAL_STATE.totalOrders,
    // reducers: {
    //     totalOrder: (state, action) => {
    //         const total = action.payload
    //         state.total = total.
    //     }
    // }
    extraReducers: builder => {
        builder
            .addCase(fetchTotalOrders.pending, state => {
                state.loading = true;
            })
            .addCase(fetchTotalOrders.fulfilled, (state, action) => {
                const allOrders = action.payload;
                state.orders = allOrders.length;
                state.loading = false;
            })
            .addCase(fetchTotalOrders.rejected, state => {
                state.loading = false;
            })
    }
})

export const selectCart = state => state.cart.items;
export const selectCartTotal = state => state.cart.total;
export const selectTotalPrice = state => state.cart.totalPrice;
export const selectTable = state => state.cart.table;
export const { cartDishes, addToCart, removeFromCart, resetCart, setTable } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;

export const totalOrderReducer = totalOrderSlice.reducer;
export const selectTotalOrders = state => state.totalOrders.orders;
export const { askTotalOrders } = totalOrderSlice.actions;