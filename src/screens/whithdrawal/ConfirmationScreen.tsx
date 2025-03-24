import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import Button from '../../components/shared/button/Button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { WithdrawalStackParamList } from '../../navigation/WithdrawalStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { colors } from '../../styles/MainStyles';

type ConfirmationScreenRouteProp = RouteProp<WithdrawalStackParamList, 'Confirmation'>;
type ConfirmationScreenNavigationProp = StackNavigationProp<WithdrawalStackParamList>;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.text.primary,
  },
  amountContainer: {
    backgroundColor: colors.background.subtle,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  amountLabel: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  amount: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: colors.text.secondary,
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 12,
    marginTop: 'auto',
  }
});

const ConfirmationScreen = () => {
  const route = useRoute<ConfirmationScreenRouteProp>();
  const navigation = useNavigation<ConfirmationScreenNavigationProp>();
  const { amount } = route.params;

  const handleConfirm = () => {
    navigation.navigate('Completion', { amount });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your withdrawal</Text>
        
        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Amount to withdraw:</Text>
          <Text style={styles.amount}>{amount.toLocaleString()} HUF</Text>
        </View>

        <Text style={styles.description}>
          Please confirm that you want to withdraw this amount. 
          The transaction cannot be undone after confirmation.
        </Text>

        <View style={styles.buttonContainer}>
          <Button 
            text="Confirm Withdrawal" 
            onPress={handleConfirm}
            variant="success"
          />
          <Button 
            text="Cancel" 
            onPress={handleCancel}
            variant="secondary"
          />
        </View>
      </View>
    </PageLayout>
  );
};

export default ConfirmationScreen;