import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/hooks';
import { selectBanknotes, selectTotalAmount } from '../../store/slices/atmSlice';
import { PageLayout } from '../../components/shared/layout/Page';
import { colors, commonStyles } from '../../styles/MainStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.pageContainer,
  },
  title: {
    ...commonStyles.pageTitle,
  },
  noteContainer: {
    ...commonStyles.card,
  },
  noteRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  noteText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  }
});

export default function StatusScreen() {
  const banknotes = useAppSelector(selectBanknotes);
  const totalAmount = useAppSelector(selectTotalAmount);

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Available Banknotes:</Text>
        
        <View>
          {banknotes.map((note) => (
            <View key={note.value} style={styles.noteContainer}>
              <View style={styles.noteRow}>
                <Text style={styles.noteText}>{note.value.toLocaleString()} HUF</Text>
                <Text style={styles.noteText}>x {note.count} pieces</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Amount:</Text>
          <Text style={styles.totalText}>
            {totalAmount.toLocaleString()} HUF
          </Text>
        </View>
      </View>
    </PageLayout>
  );
}
