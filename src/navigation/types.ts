import { NavigationProp, RouteProp } from '@react-navigation/native';
import { WithdrawalStackParamList } from './WithdrawalStack';

export type TabParamList = {
  History: undefined;
  Status: undefined;
  Withdrawal: undefined;
  Restocking: undefined;
};

export type TabNavigationProps = NavigationProp<TabParamList>;
export type TabRouteProp<T extends keyof TabParamList> = RouteProp<TabParamList, T>;

export type WithdrawalNavigationProp = NavigationProp<WithdrawalStackParamList>;
export type WithdrawalRouteProp<T extends keyof WithdrawalStackParamList> = 
  RouteProp<WithdrawalStackParamList, T>;