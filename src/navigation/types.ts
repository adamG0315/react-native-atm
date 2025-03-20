import { NavigationProp, RouteProp } from '@react-navigation/native';

export type TabParamList = {
  History: undefined;
  Status: undefined;
  Withdrawal: undefined;
  Restocking: undefined;
};

export type TabNavigationProps = NavigationProp<TabParamList>;
export type TabRouteProp<T extends keyof TabParamList> = RouteProp<TabParamList, T>;