import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categorySlice from 'components/Header/modules/categorySlice';
import checkOutSlice from 'pages/CheckOut/checkOutSlice';
import registerSlice from 'pages/Register/registerSlice';
import authSlice from 'slices/authSlice';
import cartSlice from 'slices/cartSlice';

const rootReducer = combineReducers({
    categoriesReducer: categorySlice,
    cartReducer: cartSlice,
    checkOutReducer: checkOutSlice,
    registerReducer: registerSlice,
    authReducer: authSlice
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});

let persistor = persistStore(store);

export { store, persistor };
