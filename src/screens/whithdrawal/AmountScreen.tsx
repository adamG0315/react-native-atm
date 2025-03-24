import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import Button from '../../components/shared/button/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { WithdrawalStackParamList } from '../../navigation/WithdrawalStack';
import { colors } from '../../styles/MainStyles';
import { commonStyles } from '../../styles/CommonStyles';

type AmountScreenNavigationProp = StackNavigationProp<WithdrawalStackParamList, 'Amount'>;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.pageContainer,
    gap: 24,
  },
  title: {
    ...commonStyles.pageTitle,
  },
  inputContainer: {
    ...commonStyles.inputContainer,
  },
  input: {
    fontSize: 32,
    color: colors.text.primary,
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 8,
    padding: 12,
    backgroundColor: colors.background.default,
  },
  buttonContainer: {
    ...commonStyles.buttonContainer,
  }
});

const AmountScreen = () => {
  const [amount, setAmount] = useState<string>('');
  const navigation = useNavigation<AmountScreenNavigationProp>();

  const handleContinue = () => {
    if (amount) {
      navigation.navigate('Confirmation', { amount: parseInt(amount) });
    }
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Enter the amount you want to withdraw</Text>
        
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="XXXXXX" 
            keyboardType="numeric" 
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            text="Continue" 
            onPress={handleContinue} 
            disabled={amount === ''}
            variant="primary"
          />
        </View>
      </View>
    </PageLayout>
  );
};

export default AmountScreen;
