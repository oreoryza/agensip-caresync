import { configureStore } from "@reduxjs/toolkit"
import tokenReducer from "./slices/tokenSlice"
import employeeReducer from "./slices/employeeSlice"
import profileReducer from "./slices/profileSlice"
import dataReducer from "./slices/dataSlice"
import patientsReducer from "./slices/patientSlice"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage,
  };

const persistedToken = persistReducer(persistConfig, tokenReducer);

const store = configureStore({
  reducer: {
    token: persistedToken,
    profile: profileReducer,
    employee: employeeReducer,
    data: dataReducer,
    patients: patientsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };