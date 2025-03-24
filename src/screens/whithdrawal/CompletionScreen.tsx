import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import Button from '../../components/shared/button/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { WithdrawalStackParamList } from '../../navigation/WithdrawalStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../../styles/MainStyles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { withdrawMoney } from '../../store/slices/atmSlice';
import { addTransaction } from '../../store/slices/transactionSlice';

type CompletionScreenRouteProp = RouteProp<WithdrawalStackParamList, 'Completion'>;
type CompletionScreenNavigationProp = StackNavigationProp<WithdrawalStackParamList>;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    alignItems: 'center',
  },
  statusContainer: {
    backgroundColor: colors.background.subtle,
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text.primary,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
  }
});

const CompletionScreen = () => {
  const route = useRoute<CompletionScreenRouteProp>();
  const navigation = useNavigation<CompletionScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const { amount } = route.params;
  const user = useAppSelector((state) => state.auth.user);

  let isSuccess = false;
  let errorMessage = '';

  try {
    dispatch(withdrawMoney(amount));
    isSuccess = true;
    
    // Log successful transaction
    dispatch(addTransaction({
      userId: user.id,
      timestamp: Date.now(),
      amount,
      success: true
    }));
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'An unexpected error occurred';
    }
    
    // Log failed transaction
    dispatch(addTransaction({
      userId: user.id,
      timestamp: Date.now(),
      amount,
      success: false
    }));
  }

  const handleDone = () => {
    navigation.popToTop();
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <Text style={styles.icon}>
            {isSuccess ? '✅' : '❌'}
          </Text>
          <Text style={styles.title}>
            {isSuccess ? 'Withdrawal Successful' : 'Withdrawal Failed'}
          </Text>
          <Text style={styles.message}>
            {isSuccess 
              ? `Successfully withdrew ${amount.toLocaleString()} HUF. Please collect your cash from the dispenser.`
              : errorMessage || 'The ATM cannot dispense this amount. Please try a different amount.'
            }
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            text="Done" 
            onPress={handleDone}
            variant={isSuccess ? 'success' : 'primary'}
          />
        </View>
      </View>
    </PageLayout>
  );
};

export default CompletionScreen;
