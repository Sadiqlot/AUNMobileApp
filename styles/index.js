// styles/index.js
import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export const dashboardStyles = StyleSheet.create({
  container: { 
    flex: 1, 
    // Default background removed since we’ll wrap with LinearGradient in DashboardScreen
  },

  gradientBackground: {
    flex: 1,
  },

  scrollContainer: { 
    padding: 20, 
    paddingBottom: 100 
  },

  // Header Row (logout button area)
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  // Welcome section text styles
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.white, // white because gradient background
    marginBottom: 5,
  },
  logoutButton: { 
    fontSize: 16, 
    color: COLORS.accent, 
    fontWeight: '600' 
  },

  dateText: { 
    fontSize: 14, 
    color: COLORS.white, 
    fontWeight: '500' 
  },
  timeText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: COLORS.white,
    marginTop: 2 
  },

  // Section titles (Quick Links, Assignments, Classes, Events)
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 10, 
    color: COLORS.primary 
  },

  // Quick links row + buttons
  linksRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  linkButton: { 
    flex: 1, 
    backgroundColor: COLORS.primary, 
    padding: 14, 
    borderRadius: 12, 
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  linkText: { 
    color: COLORS.white, 
    fontWeight: '700', 
    textAlign: 'center',
    fontSize: 15,
  },

  // Card container + cards
  cardContainer: { marginBottom: 15 },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },
  cardSubtitle: { 
    fontSize: 14, 
    color: COLORS.textPrimary 
  },

  // Optional: color-coded cards
  assignmentCard: { backgroundColor: '#FFF3E0' },
  classCard: { backgroundColor: '#E3F2FD' },
  eventCard: { backgroundColor: '#E8F5E9' },
});
