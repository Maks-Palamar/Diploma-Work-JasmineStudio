import { createSlice, createSelector } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./MainMenuSlice";
import { selectDishes } from "./MainMenuSlice";

const searchSlice = createSlice({
    name: "search",
    initialState: INITIAL_STATE.search,
    reducers: {
        searchDishes(state, action) {
            state.name = action.payload
        }
    },
})

export const selectSearch = state => state.search.name

export const selectFilteredDishes = createSelector(
  [selectDishes, selectSearch],
  (dishes, searchStr) => {
    return dishes.filter((contact) =>
      contact.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
);

export const { searchDishes } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;