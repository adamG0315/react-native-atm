import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState } from '../index';

const STORAGE_KEY = 'atm_state';

export const storage = {
  async saveState(state: Partial<RootState>) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Error saving state:', err);
      throw new Error('Failed to save state');
    }
  },

  async loadState(): Promise<Partial<RootState> | undefined> {
    try {
      const serializedState = await AsyncStorage.getItem(STORAGE_KEY);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error('Error loading state:', err);
      throw new Error('Failed to load state');
    }
  }
};