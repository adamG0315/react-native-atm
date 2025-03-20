import React from 'react';
import { useColorScheme } from 'react-native';
import { Text, View, XStack, YStack, Button } from 'tamagui';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from './TabBarIcon';

export const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  return (
    <XStack
      backgroundColor="$background"
      borderTopColor={isDark ? '$gray800' : '$gray200'}
      borderTopWidth={1}
      height={60}
      justifyContent="space-around"
      alignItems="center"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        
        const isFocused = state.index === index;
        
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Button
            key={route.key}
            unstyled
            onPress={onPress}
            backgroundColor="transparent"
            flex={1}
            height="100%"
            justifyContent="center"
            alignItems="center"
            pressStyle={{ opacity: 0.7 }}
          >
            <YStack alignItems="center">
              <View
                backgroundColor={isFocused ? '$primary' : 'transparent'}
                paddingHorizontal="$3"
                paddingVertical="$2"
                borderRadius="$6"
                alignItems="center"
              >
                <TabBarIcon routeName={route.name} isFocused={isFocused} />
                <Text
                  marginTop="$1"
                  color={isFocused ? 'white' : isDark ? '$gray300' : '$gray700'}
                  fontSize={12}
                >
                  {label}
                </Text>
              </View>
            </YStack>
          </Button>
        );
      })}
    </XStack>
  );
};