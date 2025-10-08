// screens/ResourcesScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import { dashboardStyles as styles } from '../styles';
import COLORS from '../constants/colors';

export default function ResourcesScreen() {

  // Sample student resources
  const studentResources = [
    { name: 'Academic Advising', info: 'Get guidance on courses & programs.' },
    { name: 'Mental Health Services', info: 'Counseling available at Health Center.' },
    { name: 'Career Services', info: 'Resume review, job postings, internships.' },
  ];

  // Sample emergency contacts
  const emergencyContacts = [
    { name: 'Campus Security', number: '08012345678' },
    { name: 'Health Center', number: '08087654321' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Resources 📚</Text>

        {/* ✅ Library Access */}
        <Text style={styles.sectionTitle}>📖 Library</Text>
        <View style={styles.eventBox}>
          <Text>Access the library catalog and databases:</Text>
          <TouchableOpacity
            style={{ ...styles.linkButton, marginTop: 10 }}
            onPress={() => Linking.openURL('https://library.aun.edu.ng')}
          >
            <Text style={styles.linkText}>Open Library</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Student Resources */}
        <Text style={styles.sectionTitle}>🎓 Student Resources</Text>
        <View style={styles.eventBox}>
          {studentResources.map((item, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: '600' }}>{item.name}</Text>
              <Text>{item.info}</Text>
            </View>
          ))}
        </View>

        {/* ✅ Emergency Contacts */}
        <Text style={styles.sectionTitle}>🚨 Emergency Contacts</Text>
        <View style={styles.eventBox}>
          {emergencyContacts.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(`tel:${item.number}`)}
              style={{ marginBottom: 8 }}
            >
              <Text style={{ color: COLORS.accent, fontWeight: '600' }}>
                {item.name}: {item.number}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
