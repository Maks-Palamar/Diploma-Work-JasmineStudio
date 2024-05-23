import { createSlice} from "@reduxjs/toolkit";  
import { fetchMenu } from "./MainMenuOps";

export const INITIAL_STATE = {
  dishes: {
    items: [],
    loading: false,
    error: null,
	},
  search: {
		name: ""
  },
  cart: {
    items: [],
    total: 0,
    totalPrice: 0
  }
}

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: INITIAL_STATE.dishes,
  extraReducers: builder => {
    builder
      .addCase(fetchMenu.pending, handlePending)
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, handleRejected)
    //-----------------------------------


    //-----------------------------------

    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addContact.rejected, handleRejected)
    //-----------------------------------
    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     const newContacts = state.items.filter(contact => contact.id !== action.payload.id);
    //     state.items = newContacts;
    //   })
    //   .addCase(deleteContact.rejected, handleRejected)
  }
});

export const selectDishes = state => state.dishes.items;
export const getIsError = state => state.dishes.error;
export const getIsLoading = state => state.dishes.loading;

export const dishesReducer = dishesSlice.reducer;