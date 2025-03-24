import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'atm_state';

export const storage = {
  async saveState(state: any) {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('Error saving state:', err);
    }
  },

  async loadState() {
    try {
      const serializedState = await AsyncStorage.getItem(STORAGE_KEY);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
      console.error('Error loading state:', err);
      return undefined;
    }
  }
};