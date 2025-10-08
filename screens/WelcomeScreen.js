// screens/WelcomeScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export default function WelcomeScreen({ onLogin }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to AUN App 🎓</Text>
        <Text style={styles.subtitle}>Your digital campus companion</Text>

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: COLORS.primary },
  subtitle: { fontSize: 16, marginBottom: 30, color: COLORS.textSecondary },
  button: { backgroundColor: COLORS.accent, padding: 15, borderRadius: 8 },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
});
