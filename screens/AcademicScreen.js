// screens/AcademicScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import { dashboardStyles as styles } from '../styles';
import COLORS from '../constants/colors';

export default function AcademicScreen() {

  // Sample academic events
  const academicEvents = [
    { title: 'Midterm Exams', date: 'Oct 10 - Oct 15' },
    { title: 'Project Submission Deadline', date: 'Oct 20' },
    { title: 'Guest Lecture: AI in Education', date: 'Oct 25, 3PM' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Academics 📘</Text>

        {/* ✅ Academic Calendar */}
        <Text style={styles.sectionTitle}>📅 Academic Calendar</Text>
        <View style={styles.eventBox}>
          {academicEvents.map((event, index) => (
            <View key={index} style={{ marginBottom: 8 }}>
              <Text style={{ fontWeight: '600' }}>{event.title}</Text>
              <Text>{event.date}</Text>
            </View>
          ))}
        </View>

        {/* ✅ Canvas Access */}
        <Text style={styles.sectionTitle}>Canvas</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://canvas.aun.edu.ng')}
          >
            <Text style={styles.linkText}>Open Canvas</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ ERP Access */}
        <Text style={styles.sectionTitle}>ERP Login</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => Linking.openURL('https://openerp.aun.edu.ng')}
          >
            <Text style={styles.linkText}>Open ERP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
