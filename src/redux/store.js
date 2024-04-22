import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/user/userSlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import transactionReducer from "../redux/transactions/transactionSlice"



const persistConfig = {
    key: "root",
    verson:1,
  storage,
};


const reducers = combineReducers({
  auth: authReducer,
  transactions :transactionReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});