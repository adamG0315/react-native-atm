import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from './CustomTabBar';
import { TabParamList } from './types';

// Import screens
import HistoryScreen from '../screens/history/HistoryScreen';
import StatusScreen from '../screens/status/StatusScreen';
import WithdrawalScreen from '../screens/whithdrawal/WithdrawalScreen';
import RestockingScreen from '../screens/restocking/RestockingScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="History" 
        component={HistoryScreen} 
      />
      <Tab.Screen 
        name="Status" 
        component={StatusScreen} 
      />
      <Tab.Screen 
        name="Withdrawal" 
        component={WithdrawalScreen} 
      />
      <Tab.Screen 
        name="Restocking" 
        component={RestockingScreen} 
      />
    </Tab.Navigator>
  );
};