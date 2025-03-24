import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import { useAppSelector } from '../../store/hooks';
import { colors, commonStyles } from '../../styles/MainStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.pageContainer,
  },
  title: {
    ...commonStyles.pageTitle,
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
  },
  transactionItem: {
    ...commonStyles.card,
    marginBottom: 12,
  },
  amount: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  details: {
    color: colors.text.secondary,
    marginTop: 4,
  }
});

const TransactionItem = ({ transaction }) => (
  <View style={styles.transactionItem}>
    <Text style={styles.amount}>
      {transaction.amount.toLocaleString()} HUF
      {' '}
      {transaction.success ? '✅' : '❌'}
    </Text>
    <Text style={styles.details}>
      {new Date(transaction.timestamp).toLocaleString()}
    </Text>
    <Text style={styles.details}>
      User ID: {transaction.userId}
    </Text>
  </View>
);

const HistoryScreen = () => {
  const transactions = useAppSelector(state => state.transactions.history);

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Transaction History</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={transactions}
            renderItem={({ item }) => <TransactionItem transaction={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        </View>
      </View>
    </PageLayout>
  );
};

export default HistoryScreen;