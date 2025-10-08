// components/StanleyChatbot.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export default function StanleyChatbot() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, { toValue: -10, duration: 600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(bounceAnim, { toValue: 0, duration: 600, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  }, [bounceAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.avatar, { transform: [{ translateY: bounceAnim }] }]}>
        <Text style={{ fontSize: 24 }}>🐎</Text>
      </Animated.View>
      <View style={styles.bubble}>
        <Text style={styles.text}>Hi, I'm Stallion! Need help? 🐴</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: 'absolute', bottom: 20, right: 20, alignItems: 'center' },
  avatar: { backgroundColor: COLORS.primary, borderRadius: 50, padding: 10, marginBottom: 5 },
  bubble: { backgroundColor: COLORS.lightGray, borderRadius: 12, padding: 8 },
  text: { color: COLORS.textPrimary, fontSize: 12 },
});
