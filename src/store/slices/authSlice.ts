import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: { 
    id: string;
    role: 'user' | 'operator';
  } | null;
}

const initialState: AuthState = {
  user: null
};
//TODO use UUID
const generateId = () => Math.random().toString(36).substring(2, 15);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<'user' | 'operator'>) => {
      state.user = {
        id: generateId(),
        role: action.payload
      };
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;