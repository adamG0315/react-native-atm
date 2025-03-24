import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  userId: string;
  timestamp: number;
  amount: number;
  success: boolean;
}

interface TransactionState {
  history: Transaction[];
}

const initialState: TransactionState = {
  history: []
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.history.push(action.payload);
    }
  }
});

export const { addTransaction } = transactionSlice.actions;

export const selectTransactions = (state: { transactions: TransactionState }) => state.history;

export default transactionSlice.reducer;