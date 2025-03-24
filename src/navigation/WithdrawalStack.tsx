import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WithdrawalScreen from '../screens/whithdrawal/WithdrawalScreen';
import AmountScreen from '../screens/whithdrawal/AmountScreen';
import ConfirmationScreen from '../screens/whithdrawal/ConfirmationScreen';
import CompletionScreen from '../screens/whithdrawal/CompletionScreen';

export type WithdrawalStackParamList = {
  WithdrawalHome: undefined;
  Amount: undefined;
  Confirmation: { amount: number };
  Completion: { amount: number };
};

const Stack = createStackNavigator<WithdrawalStackParamList>();

export const WithdrawalStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          lineHeight: 60,
        },
        headerLeftContainerStyle: {
          height: 60,
          alignItems: 'center',
          paddingLeft: 16,
        },
        headerRightContainerStyle: {
          height: 60,
          alignItems: 'center',
          paddingRight: 16,
        },
      }}
    >
      <Stack.Screen 
        name="WithdrawalHome" 
        component={WithdrawalScreen}
        options={{ title: 'Withdrawal' }} 
      />
      <Stack.Screen 
        name="Amount" 
        component={AmountScreen}
        options={{ title: 'Enter Amount' }} 
      />
      <Stack.Screen 
        name="Confirmation" 
        component={ConfirmationScreen}
        options={{ title: 'Confirm Withdrawal' }} 
      />
      <Stack.Screen 
        name="Completion" 
        component={CompletionScreen}
        options={{ 
          title: 'Transaction Complete',
          headerLeft: () => null 
        }} 
      />
    </Stack.Navigator>
  );
};

export default WithdrawalStack;