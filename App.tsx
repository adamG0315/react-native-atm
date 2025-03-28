import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import { TabNavigator } from './src/navigation/TabNavigator';
import LoginScreen from './src/screens/login/LoginScreen';
import { useAppSelector } from './src/store/hooks';
import 'react-native-gesture-handler';
import { colors } from './src/styles/MainStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppContent(): React.JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.background.default}
      />
      <NavigationContainer>
        {user ? <TabNavigator /> : <LoginScreen />}
      </NavigationContainer>
    </>
  );
}

export default function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </SafeAreaProvider>
  );
}
