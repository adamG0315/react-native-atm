import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar } from './CustomTabBar';
import { TabParamList } from './types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout } from '../store/slices/authSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

// Import screens
import HistoryScreen from '../screens/history/HistoryScreen';
import StatusScreen from '../screens/status/StatusScreen';
import { WithdrawalStack }  from './WithdrawalStack';
import RestockingScreen from '../screens/restocking/RestockingScreen';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const screenOptions = {
    headerShown: true,
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18,
      height: 60,
      lineHeight: 60,
      textAlignVertical: 'center',
    },
    headerRightContainerStyle: {
      height: 60,
      alignItems: 'center',
      paddingRight: 16,
    },
    headerLeftContainerStyle: {
      height: 60,
      alignItems: 'center',
      paddingLeft: 16,
    },
    headerRight: () => (
      <TouchableOpacity
        onPress={handleLogout}
        style={{ padding: 8 }}
      >
        <MaterialCommunityIcons 
          name="logout" 
          size={24} 
          color="black" 
        />
      </TouchableOpacity>
    ),
  };

  if (user?.role === 'user') {
    return (
      <Tab.Navigator
        screenOptions={{
          ...screenOptions,
          headerShown: false,
          tabBarStyle: { display: 'none' }
        }}
      >
        <Tab.Screen 
          name="Withdrawal" 
          component={WithdrawalStack}
          options={{ title: 'ATM Withdrawal' }} 
        />
      </Tab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={screenOptions}
    >
      <Tab.Screen 
        name="History" 
        component={HistoryScreen}
        options={{ title: 'Transaction History' }} 
      />
      <Tab.Screen 
        name="Status" 
        component={StatusScreen}
        options={{ title: 'ATM Status' }} 
      />
      <Tab.Screen 
        name="Restocking" 
        component={RestockingScreen}
        options={{ title: 'Restock ATM' }} 
      />
    </Tab.Navigator>
  );
};