// screens/DashboardScreen.js
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View, TouchableOpacity, Linking, FlatList, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'; // ✅ for notification bell
import StanleyChatbot from '../components/StanleyChatbot';
import { dashboardStyles as styles } from '../styles';
import COLORS from '../constants/colors';

export default function DashboardScreen({ user, onLogout, navigation }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Quick links
  const quickLinks = [
    { label: 'Canvas', url: 'https://canvas.aun.edu.ng', icon: '📘' },
    { label: 'OpenERP', url: 'https://erp.aun.edu.ng', icon: '🧾', color: '#E53935' }, // red
    { label: 'E-Library', url: 'https://library.aun.edu.ng', icon: '📚', color: '#4A90E2' },
  ];

  // Assignments
  const assignments = [
    { title: 'Database Systems Essay', due: 'Oct 10, 2025', course: 'CIE 101', icon: '📝' },
    { title: 'Web Development Discussion', due: 'Oct 12, 2025', course: 'INF 201', icon: '💬' },
  ];

  // Classes
  const classes = [
    { code: 'CIE 101', time: 'Mon 10AM-12PM', icon: '📘' },
    { code: 'INF 201', time: 'Tue 2PM-4PM', icon: '💻' },
  ];

  // Events
  const eventsToday = [
    { text: 'Music Club Meeting @ 5PM', icon: '🎶' },
    { text: 'Football Match: AUN vs BUK @ 7PM', icon: '⚽' },
  ];

  // Marketplace preview
  const marketplaceItems = [
    { id: 1, name: 'Used Textbook: Data Science 101', price: '₦3,000', image: 'https://i.ibb.co/6ykM7Sk/book.png' },
    { id: 2, name: 'Headphones - Almost New', price: '₦8,500', image: 'https://i.ibb.co/5Y3dX3P/headphones.png' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getAssignmentStatus = (dueDate) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diff = (due - now) / (1000 * 60 * 60 * 24);
    if (diff < 0) return { text: 'Overdue', color: '#FFCDD2' };
    if (diff <= 3) return { text: 'Due Soon', color: '#FFF9C4' };
    return { text: 'Upcoming', color: '#C8E6C9' };
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

      {/* HEADER with logout + notification */}
      <View style={styles.headerRow}>
  <View style={{ flex: 1 }} />

  {/* 🔔 Push Notification Icon */}
  <TouchableOpacity 
    style={{ marginRight: 20 }}
    onPress={() => {
      alert("📢 Reminders will appear here! (e.g., class times, assignments)");
    }}
  >
    <Icon name="notifications-outline" size={28} color={COLORS.primary} />
  </TouchableOpacity>

  {/* Logout */}
  <TouchableOpacity onPress={onLogout}>
    <Text style={styles.logoutButton}>Logout</Text>
  </TouchableOpacity>
</View>


      {/* WELCOME SECTION */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.accent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          padding: 25,
          borderRadius: 20,
          marginHorizontal: 20,
          marginBottom: 25,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image
          source={{ uri: 'https://i.ibb.co/7QpKsCX/avatar-placeholder.png' }}
          style={{ width: 70, height: 70, borderRadius: 35, marginRight: 20 }}
        />
        <View>
          <Text style={{ fontSize: 18, color: COLORS.white }}>Hello,</Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: COLORS.white }}>
            {user?.email || 'Guest'} 🎉
          </Text>
          <Text style={styles.dateText}>
            {currentTime.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </Text>
          <Text style={styles.timeText}>{currentTime.toLocaleTimeString('en-US')}</Text>
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* QUICK LINKS */}
        <Text style={styles.sectionTitle}>🔗 Quick Links</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={quickLinks}
          keyExtractor={(item) => item.label}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.linkButton,
                {
                  marginRight: 12,
                  paddingHorizontal: 25,
                  paddingVertical: 15,
                  borderRadius: 12,
                  backgroundColor: item.color || COLORS.primary,
                },
              ]}
              onPress={() => Linking.openURL(item.url)}
            >
              <Text style={{ fontSize: 16, fontWeight: '600', color: COLORS.white }}>
                {item.icon} {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />

        {/* ASSIGNMENTS */}
        <Text style={styles.sectionTitle}>📌 Assignments Due</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={assignments}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => {
            const status = getAssignmentStatus(item.due);
            return (
              <View
                style={[
                  styles.card,
                  { backgroundColor: status.color, marginRight: 12, borderRadius: 15, padding: 20 },
                ]}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {item.icon} {item.title}
                </Text>
                <Text style={styles.cardSubtitle}>Course: {item.course}</Text>
                <Text style={styles.cardSubtitle}>Due: {item.due}</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', marginTop: 5 }}>{status.text}</Text>
              </View>
            );
          }}
        />

        {/* CLASSES */}
        <Text style={styles.sectionTitle}>📚 Classes Today</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={classes}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.card,
                styles.classCard,
                { marginRight: 12, borderRadius: 15, padding: 20 },
              ]}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {item.icon} {item.code}
              </Text>
              <Text style={styles.cardSubtitle}>{item.time}</Text>
            </View>
          )}
        />

        {/* EVENTS */}
        <Text style={styles.sectionTitle}>🎉 Events Today</Text>
        <View style={styles.cardContainer}>
          {eventsToday.map((event, i) => (
            <View
              key={i}
              style={[
                styles.card,
                styles.eventCard,
                { borderRadius: 15, padding: 15, marginBottom: 10 },
              ]}
            >
              <Text style={{ fontSize: 16, fontWeight: '500' }}>
                {event.icon} {event.text}
              </Text>
            </View>
          ))}
        </View>

        {/* MARKETPLACE PREVIEW */}
        <Text style={styles.sectionTitle}>🛍️ Marketplace</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={marketplaceItems}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 15 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.card,
                { marginRight: 12, borderRadius: 15, padding: 15, alignItems: 'center', width: 180 },
              ]}
              onPress={() => navigation.navigate('Marketplace')}
            >
              <Image source={{ uri: item.image }} style={{ width: 80, height: 80, marginBottom: 10 }} />
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.name}</Text>
              <Text style={{ color: COLORS.primary, marginTop: 5 }}>{item.price}</Text>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <TouchableOpacity
              style={[
                styles.card,
                { borderRadius: 15, padding: 15, justifyContent: 'center', alignItems: 'center', width: 120 },
              ]}
              onPress={() => navigation.navigate('Marketplace')}
            >
              <Text style={{ fontWeight: '600', color: COLORS.primary }}>See All →</Text>
            </TouchableOpacity>
          }
        />

      </ScrollView>

      {/* CHATBOT */}
      <StanleyChatbot />
    </SafeAreaView>
  );
}
