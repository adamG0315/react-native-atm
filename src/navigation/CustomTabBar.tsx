import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from './TabBarIcon';
import { colors } from '../styles/MainStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background.default,
    borderTopWidth: 1,
    borderTopColor: colors.border.default,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 24,
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  }
});

export const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.container, 
      { paddingBottom: insets.bottom }
    ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const labelColor = isFocused ? colors.primary.main : colors.text.secondary;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() => navigation.navigate(route.name)}
          >
            <View style={styles.tabContent}>
              <TabBarIcon routeName={route.name} isFocused={isFocused} />
              <Text style={[styles.label, { color: labelColor }]}>
                {route.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};