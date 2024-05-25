import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../MainMenuSlice/MainMenuSlice";


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
        }
    }
})
export const { modalOpen, modalClose } = ModalSlice.actions

export const modalReducer = ModalSlice.reducer
