// screens/MoreScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { dashboardStyles as styles } from '../styles';
import COLORS from '../constants/colors';

export default function MoreScreen({ navigation }) {
  // Example actions
  const handleThemeChange = () =>
    Alert.alert('Theme change', 'This feature will be available soon.');
  const handleNotifications = () =>
    Alert.alert('Notifications', 'Manage notification preferences here.');
  const handleFeedback = () =>
    Alert.alert('Feedback', 'Submit your feedback or report bugs.');
  const handleAbout = () =>
    Alert.alert(
      'About',
      'AUN Mobile App v1.0\nDeveloped to enhance learning and campus life at AUN, Yola.'
    );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>More ⚙️</Text>

        {/* ✅ Profile & Academics */}
        <Text style={styles.sectionTitle}>Profile</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity
            style={styles.linkButton}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.linkText}>👤 Profile & Academics</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Settings */}
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity style={styles.linkButton} onPress={handleThemeChange}>
            <Text style={styles.linkText}>Change Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton} onPress={handleNotifications}>
            <Text style={styles.linkText}>Notifications</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Feedback */}
        <Text style={styles.sectionTitle}>Feedback</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity style={styles.linkButton} onPress={handleFeedback}>
            <Text style={styles.linkText}>Submit Feedback / Report Bug</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ About */}
        <Text style={styles.sectionTitle}>About App</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity style={styles.linkButton} onPress={handleAbout}>
            <Text style={styles.linkText}>About AUN Mobile App</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
