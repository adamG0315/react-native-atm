import { createTamagui } from 'tamagui';
import { tokens } from '@tamagui/themes';

const tamaguiConfig = createTamagui({
  themes: {
    light: {
      background: '#ffffff',
      text: '#000000',
      primary: '#007AFF',
      secondary: '#34C759',
    },
    dark: {
      background: '#121212',
      text: '#ffffff',
      primary: '#0A84FF',
      secondary: '#30D158',
    },
  },
  tokens,
  fonts: {
    heading: {
      family: 'System',
      size: { 1: 24, 2: 28, 3: 32 },
      weight: { 1: '400', 2: '600', 3: '700' },
    },
    body: {
      family: 'System',
      size: { 1: 14, 2: 16, 3: 18 },
      weight: { 1: '400', 2: '500', 3: '600' },
    },
  },
  shorthands: {
    bg: 'backgroundColor',
    txt: 'color',
    p: 'padding',
    m: 'margin',
  },
});

export default tamaguiConfig;