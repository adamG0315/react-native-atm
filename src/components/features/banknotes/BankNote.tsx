import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../../styles/MainStyles';

interface BankNoteProps {
  amount: number | string;
  handlePress: () => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6cb48b",
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  text: {
    fontSize: 24,
    color: colors.buttons.primary.text,
  }
})

const BankNote = ({amount, handlePress}: BankNoteProps) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={styles.container}
    >
      <Text style={styles.text}>
        {amount}
      </Text>
    </TouchableOpacity>
  )
}

export default BankNote