import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../styles/MainStyles';

interface PageLayoutProps {
  children: React.ReactNode;
  padded?: boolean;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default
  },
  content: {
    flex: 1,
    marginTop: 32,
    gap: 16
  },
  paddedContent: {
    padding: 16,
  }
});

export const PageLayout = ({ children, padded = true }: PageLayoutProps) => {
  return (
    <View style={styles.container}>
      <View style={[
        styles.content,
        padded && styles.paddedContent
      ]}>
        {children}
      </View>
    </View>
  );
};