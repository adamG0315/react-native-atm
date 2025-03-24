import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles/MainStyles';

interface TabBarIconProps {
  routeName: string;
  isFocused: boolean;
}

export const TabBarIcon = ({ routeName, isFocused }: TabBarIconProps) => {
  const color = isFocused ? colors.primary.main : colors.text.secondary;
  const size = 24;
  
  switch (routeName) {
    case 'History':
      return (
        <MaterialCommunityIcons 
          name="history" 
          size={size} 
          color={color} 
        />
      );
    case 'Status':
      return (
        <MaterialCommunityIcons 
          name={isFocused ? "chart-box" : "chart-box-outline"} 
          size={size} 
          color={color} 
        />
      );
    case 'Withdrawal':
      return (
        <MaterialCommunityIcons 
          name={isFocused ? "credit-card" : "credit-card-outline"} 
          size={size} 
          color={color} 
        />
      );
    case 'Restocking':
      return (
        <MaterialCommunityIcons 
          name={isFocused ? "package-variant-closed" : "package-variant"} 
          size={size} 
          color={color} 
        />
      );
    default:
      return null;
  }
};