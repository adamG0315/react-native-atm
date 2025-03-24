import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageLayout } from '../../components/shared/layout/Page';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectBanknotes, restockBanknotes } from '../../store/slices/atmSlice';
import Button from '../../components/shared/button/Button';
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
  },
  noteValue: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  noteCount: {
    fontSize: 16,
    color: colors.text.secondary,
    marginTop: 4,
  },
  buttonContainer: {
    width: '40%',
  }
});

const RestockingScreen = () => {
  const dispatch = useAppDispatch();
  const banknotes = useAppSelector(selectBanknotes);

  const handleRestockSingle = (value: number, currentCount: number) => {
    const restock = {
      [value]: 100 - currentCount
    };
    dispatch(restockBanknotes(restock));
  };

  return (
    <PageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Banknote Levels</Text>
        
        {banknotes.map((note) => (
          <View key={note.value} style={styles.noteContainer}>
            <View style={styles.noteRow}>
              <View>
                <Text style={styles.noteValue}>{note.value.toLocaleString()} HUF</Text>
                <Text style={styles.noteCount}>{note.count}/100</Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button 
                  text="Restock" 
                  onPress={() => handleRestockSingle(note.value, note.count)}
                  variant="primary"
                  disabled={note.count >= 100}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    </PageLayout>
  );
};

export default RestockingScreen;
