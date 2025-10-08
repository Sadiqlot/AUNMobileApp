// screens/CampusLifeScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, TouchableOpacity, Alert } from 'react-native';
import { dashboardStyles as styles } from '../styles';
import COLORS from '../constants/colors';

export default function CampusLifeScreen() {

  // Sample campus news
  const campusNews = [
    { headline: 'New Library Wing Opens', date: 'Oct 10, 2025' },
    { headline: 'AUN Ranked Top 10 in Tech Innovation', date: 'Oct 5, 2025' },
  ];

  // Sample entertainment events
  const entertainment = [
    { title: 'Movie Night @ Main Hall', time: '8PM' },
    { title: 'Comedy Show by Students', time: '6PM' },
  ];

  // Sample campus events
  const campusEvents = [
    { title: 'Music Club Meeting', time: '5PM' },
    { title: 'Drama Rehearsal', time: '6PM' },
    { title: 'Student Council Meeting', time: '7PM' },
  ];

  // Sample dining locations
  const diningLocations = [
    { name: 'Main Cafeteria', menu: 'Breakfast, Lunch, Dinner' },
    { name: 'North Wing Cafeteria', menu: 'Lunch & Snacks' },
  ];

  // Sample sports fixtures
  const sportsFixtures = [
    { match: 'AUN STALLION vs BUK', sport: 'Football', time: '7PM' },
    { match: 'AUN STALLION vs VETS', sport: 'Basketball', time: '6PM' },
  ];

  const handleMap = () => Alert.alert('Campus Map', 'Campus map feature coming soon!');

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Campus Life 🎉</Text>

        {/* ✅ Campus News */}
        <Text style={styles.sectionTitle}>Campus News</Text>
        <View style={styles.eventBox}>
          {campusNews.map((news, index) => (
            <Text key={index}>📰 {news.headline} ({news.date})</Text>
          ))}
        </View>

        {/* ✅ Entertainment */}
        <Text style={styles.sectionTitle}>Entertainment</Text>
        <View style={styles.eventBox}>
          {entertainment.map((item, index) => (
            <Text key={index}>🎭 {item.title} @ {item.time}</Text>
          ))}
        </View>

        {/* ✅ Campus Events */}
        <Text style={styles.sectionTitle}>Events</Text>
        <View style={styles.eventBox}>
          {campusEvents.map((event, index) => (
            <Text key={index}>🎈 {event.title} @ {event.time}</Text>
          ))}
        </View>

        {/* ✅ Dining Services */}
        <Text style={styles.sectionTitle}>Dining Services</Text>
        <View style={styles.eventBox}>
          {diningLocations.map((loc, index) => (
            <View key={index} style={{ marginBottom: 5 }}>
              <Text style={{ fontWeight: '600' }}>{loc.name}</Text>
              <Text>{loc.menu}</Text>
            </View>
          ))}
        </View>

        {/* ✅ Campus Map */}
        <Text style={styles.sectionTitle}>Campus Map</Text>
        <View style={styles.eventBox}>
          <TouchableOpacity style={styles.linkButton} onPress={handleMap}>
            <Text style={styles.linkText}>View Campus Map</Text>
          </TouchableOpacity>
        </View>

        {/* ✅ Sports Fixtures */}
        <Text style={styles.sectionTitle}>Sports Fixtures</Text>
        <View style={styles.eventBox}>
          {sportsFixtures.map((game, index) => (
            <Text key={index}>🏅 {game.sport}: {game.match} @ {game.time}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
