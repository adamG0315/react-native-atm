import { configureStore } from '@reduxjs/toolkit';
import { storage } from './utils/storage';
import atmReducer from './slices/atmSlice';
import authReducer from './slices/authSlice';
import transactionReducer from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    atm: atmReducer,
    auth: authReducer,
    transactions: transactionReducer
  },
});

storage.loadState().then(preloadedState => {
  if (preloadedState) {
    store.dispatch({ type: 'HYDRATE', payload: preloadedState });
  }
});

store.subscribe(() => {
  storage.saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;