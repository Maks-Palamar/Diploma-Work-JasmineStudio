import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../MainMenuSlice/MainMenuSlice";
import { makeOrder } from "../MainMenuSlice/MainMenuOps";

const ModalSlice = createSlice({
    name: "modal",
    initialState: INITIAL_STATE.modal,
    reducers: {
        modalOpen(state, action) {
            state.isOpen = true
            state.item = action.payload
        },
        modalClose(state) {
            state.isOpen = false
        },
        modalOrdered(state, action) {
            state.isOrdered = action.payload
        }
    },
    extraReducers: builder => {
        builder
            // .addCase(modalOpen, (state, action) => {
            //     state.isOpen = true
            //     state.item = action.payload
            // })
            // .addCase(modalClose, state => {
            //     state.isOpen = false
            // })
        
        //---------------------------------
            .addCase(makeOrder.pending, state => {
                state.loading = true
            })
            .addCase(makeOrder.fulfilled, state => {
                state.loading = false
            })
            .addCase(makeOrder.rejected, state => {
                state.loading = false
            })
            
    }
})
export const { modalOpen, modalClose, modalOrdered } = ModalSlice.actions

export const modalReducer = ModalSlice.reducer
