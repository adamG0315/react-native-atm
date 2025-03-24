import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { PageLayout } from '../../components/shared/layout/Page';
import Button from '../../components/shared/button/Button';
import { commonStyles } from '../../styles/MainStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.pageContainer,
    alignItems: 'center',
  },
  title: {
    ...commonStyles.pageTitle,
  },
  buttonContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  }
});

export default function LoginScreen() {
  const dispatch = useAppDispatch();

  const loginAsUser = () => {
    dispatch(login('user'));
  };

  const loginAsOperator = () => {
    dispatch(login('operator'));
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            text="Login as User"
            onPress={loginAsUser}
            variant="primary"
          />
          <Button 
            text="Login as Operator"
            onPress={loginAsOperator}
            variant="secondary"
          />
        </View>
      </View>
    </PageLayout>
  );
}
