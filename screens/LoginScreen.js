// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

export default function LoginScreen({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}
      >
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={() => onLogin(email, password)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: COLORS.primary },
  input: { 
    width: '100%', 
    borderWidth: 1, 
    borderColor: COLORS.lightGray, 
    padding: 10, 
    borderRadius: 8, 
    marginVertical: 10, 
    backgroundColor: COLORS.card 
  },
  button: { backgroundColor: COLORS.primary, paddingVertical: 12, paddingHorizontal: 40, borderRadius: 8, marginTop: 10 },
  buttonText: { color: COLORS.white, fontSize: 16, fontWeight: '600' },
  backButton: { marginTop: 15 },
  backText: { color: COLORS.accent, fontSize: 14 },
});
