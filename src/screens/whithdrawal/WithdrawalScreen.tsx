import { View, Text, StyleSheet } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import { BanknoteList } from '../../components/features/banknotes/BankNoteList';
import { useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';
import Button from '../../components/shared/button/Button';
import { commonStyles } from '../../styles/MainStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.pageContainer,
  },
  title: {
    ...commonStyles.pageTitle,
  },
  buttonContainer: {
    marginTop: 'auto',
  }
});

const WithdrawalScreen = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Select the amount you want to withdraw</Text>
        <BanknoteList/>
        <View style={styles.buttonContainer}>
          <Button 
            text="Logout" 
            onPress={handleLogout}
            variant="secondary"
          />
        </View>
      </View>
    </PageLayout>
  );
};

export default WithdrawalScreen;