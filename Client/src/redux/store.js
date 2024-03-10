import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './Users/UserSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: 'root',
  storage, // corrected 'stroage' to 'storage'
  version: 1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);
