import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native' 
import { colors } from '../../../styles/MainStyles'

interface ButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
  primary: {
    backgroundColor: colors.buttons.primary.background,
  },
  secondary: {
    backgroundColor: colors.buttons.secondary.background,
  },
  success: {
    backgroundColor: colors.buttons.success.background,
  },
  danger: {
    backgroundColor: colors.buttons.danger.background,
  }
});

const Button = ({text, onPress, disabled, variant = 'primary'}: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled
      ]}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;