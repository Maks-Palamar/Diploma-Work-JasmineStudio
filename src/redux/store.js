import { configureStore } from "@reduxjs/toolkit";
import { dishesReducer } from "./MainMenuSlice/MainMenuSlice";
import { searchReducer } from "./MainMenuSlice/SearchMenuSlice";

// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        search: searchReducer,
    },
    // middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
});

// export const persistor = persistStore(store)

export default store