import React from 'react';
import { useColorScheme } from 'react-native';
import { History, Activity, CreditCard, Package } from '@tamagui/lucide-icons';

interface TabBarIconProps {
  routeName: string;
  isFocused: boolean;
}

export const TabBarIcon = ({ routeName, isFocused }: TabBarIconProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const color = isFocused ? 'white' : isDark ? '$gray300' : '$gray700';
  const size = 20;
  
  switch (routeName) {
    case 'History':
      return <History size={size} color={color} />;
    case 'Status':
      return <Activity size={size} color={color} />;
    case 'Withdrawal':
      return <CreditCard size={size} color={color} />;
    case 'Restocking':
      return <Package size={size} color={color} />;
    default:
      return null;
  }
};