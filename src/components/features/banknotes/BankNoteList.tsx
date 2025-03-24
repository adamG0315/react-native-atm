import React from 'react';
import BankNote from './BankNote';
import { bankNotes } from '../../../consts/AtmConsts';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WithdrawalStackParamList } from '../../../navigation/WithdrawalStack';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
    justifyContent: 'space-between'
  },
  bankNoteContainer: {
    width: '48%', // This ensures 2 items per row with gap
  }
});

type WithdrawalScreenNavigationProp = StackNavigationProp<WithdrawalStackParamList, 'WithdrawalHome'>;

export const BanknoteList = () => {
  const navigation = useNavigation<WithdrawalScreenNavigationProp>();

  const handleSelect = (amount: number) => {
    navigation.navigate('Confirmation', { amount });
  };

  const handleOther = () => {
    navigation.navigate('Amount');
  };

  return (
    <View style={styles.container}>
      {bankNotes.map((amount) => (
        <View key={amount} style={styles.bankNoteContainer}>
          <BankNote 
            amount={amount}
            handlePress={() => handleSelect(amount)}
          />
        </View>
      ))}
      <View style={styles.bankNoteContainer}>
        <BankNote amount="Other" handlePress={handleOther} />
      </View>
    </View>
  );
};