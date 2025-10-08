// navigation/AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import AcademicScreen from '../screens/AcademicScreen';
import CampusLifeScreen from '../screens/CampusLifeScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import MoreScreen from '../screens/MoreScreen';
import ProfileScreen from '../screens/ProfileScreen';  // ✅ Add Profile
import COLORS from '../constants/colors';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppNavigator({ user, onLogout }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.textPrimary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          paddingBottom: 5,
          height: 60,
        },
      }}
    >
      {/* Dashboard */}
      <Tab.Screen
        name="Home"
        options={{ tabBarLabel: 'Dashboard' }}
      >
        {() => <DashboardScreen user={user} onLogout={onLogout} />}
      </Tab.Screen>

      {/* Academics */}
      <Tab.Screen
        name="Academics"
        component={AcademicScreen}
        options={{ tabBarLabel: 'Academics' }}
      />

      {/* Campus Life */}
      <Tab.Screen
        name="CampusLife"
        component={CampusLifeScreen}
        options={{ tabBarLabel: 'Campus Life' }}
      />

      {/* Resources */}
      <Tab.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{ tabBarLabel: 'Resources' }}
      />

      {/* More Hub */}
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{ tabBarLabel: 'More' }}
      />

      {/* Hidden Profile Screen (accessible only from More) */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
    </Tab.Navigator>
  );
}
