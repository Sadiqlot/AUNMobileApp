// screens/CreateAccountScreen.js
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateAccountScreen({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBack} style={{ marginTop: 15 }}>
        <Text style={{ color: '#007bff' }}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#388e3c',
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600', textAlign: 'center' },
});
