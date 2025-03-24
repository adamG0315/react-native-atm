import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const MAX_AMOUNT = 100;

interface Banknote {
  value: number;
  count: number;
}

interface AtmState {
  banknotes: Banknote[];
  totalAmount: number;
}

const initialState: AtmState = {
  banknotes: [
    { value: 20000, count: MAX_AMOUNT },
    { value: 10000, count: MAX_AMOUNT },
    { value: 5000, count: MAX_AMOUNT },
    { value: 2000, count: MAX_AMOUNT },
  ],
  totalAmount: 3700000,
};

export const atmSlice = createSlice({
  name: 'atm',
  initialState,
  reducers: {
    withdrawMoney: (state, action: PayloadAction<number>) => {
      const amount = action.payload;
      let remainingAmount = amount;
      const dispensedNotes: { [key: number]: number } = {};
      
      const availableNotes = [...state.banknotes].sort((a, b) => b.value - a.value);
      
      for (const note of availableNotes) {
        if (remainingAmount >= note.value && note.count > 0) {
          const notesNeeded = Math.min(
            Math.floor(remainingAmount / note.value),
            note.count
          );
          
          if (notesNeeded > 0) {
            dispensedNotes[note.value] = notesNeeded;
            remainingAmount -= note.value * notesNeeded;
          }
        }
      }

      if (remainingAmount !== 0) {
        throw new Error('Cannot dispense exact amount');
      }

      state.banknotes = state.banknotes.map(note => ({
        ...note,
        count: note.count - (dispensedNotes[note.value] || 0)
      }));

      state.totalAmount -= amount;
    },
    restockBanknotes: (state, action: PayloadAction<Partial<Record<number, number>>>) => {
      const restock = action.payload;
      
      state.banknotes = state.banknotes.map(note => ({
        ...note,
        count: note.count + (restock[note.value] || 0)
      }));

      state.totalAmount = state.banknotes.reduce(
        (total, note) => total + (note.value * note.count), 
        0
      );
    },
  },
});

export const { withdrawMoney, restockBanknotes } = atmSlice.actions;
export default atmSlice.reducer;

export const selectBanknotes = (state: { atm: AtmState }) => state.atm.banknotes;
export const selectTotalAmount = (state: { atm: AtmState }) => state.atm.totalAmount;