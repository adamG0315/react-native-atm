import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TamaguiProvider } from 'tamagui';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import tamaguiConfig from './tamagui.config';
import { TabNavigator } from './src/navigation/TabNavigator';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <TamaguiProvider config={tamaguiConfig}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? Colors.darker : Colors.lighter}
        />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </TamaguiProvider>
    </Provider>
  );
}

export default App;
