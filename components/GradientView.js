// components/GradientView.js
import React from 'react';
import { View } from 'react-native';
import COLORS from '../constants/colors';

export default function GradientView({
  colors = [COLORS.primary, COLORS.accent],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
  children,
}) {
  // Try expo-linear-gradient (named export)
  try {
    // dynamic require so bundler doesn't crash if not installed
    // eslint-disable-next-line global-require
    const { LinearGradient } = require('expo-linear-gradient');
    return (
      <LinearGradient colors={colors} start={start} end={end} style={style}>
        {children}
      </LinearGradient>
    );
  } catch (e1) {
    // Try react-native-linear-gradient (default export)
    try {
      // eslint-disable-next-line global-require
      const LinearGradientDefault = require('react-native-linear-gradient').default;
      return (
        <LinearGradientDefault colors={colors} start={start} end={end} style={style}>
          {children}
        </LinearGradientDefault>
      );
    } catch (e2) {
      // Fallback to plain View with solid background (first color)
      return <View style={[style, { backgroundColor: (colors && colors[0]) || COLORS.primary }]}>{children}</View>;
    }
  }
}
