import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "./MainMenuSlice/MainMenuSlice";
import { searchReducer } from "./MainMenuSlice/SearchMenuSlice";
import { cartReducer, totalOrderReducer } from "./CartSlice/CartSlice";
import { modalReducer } from "./ModalSlice/ModalSlice";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	version: 1,
    storage,
    // whitelist: ['search', 'cart'],
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)
const persistedSearchReducer = persistReducer(persistConfig, searchReducer)

export const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        search: persistedSearchReducer,
        cart: persistedCartReducer,
        modal: modalReducer,
        totalOrders: totalOrderReducer,
    },
    middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store)

export default store