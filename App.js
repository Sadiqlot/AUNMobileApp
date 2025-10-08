// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AppNavigator from './navigation/AppNavigator';
import COLORS from './constants/colors';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email && password) {
      setUser({ email });
      setScreen('dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setScreen('welcome');
  };

  return (
    <NavigationContainer>
      {screen === 'welcome' && (
        <WelcomeScreen onLogin={() => setScreen('login')} />
      )}
      {screen === 'login' && (
        <LoginScreen onLogin={handleLogin} onBack={() => setScreen('welcome')} />
      )}
      {screen === 'dashboard' && (
        <AppNavigator user={user} onLogout={handleLogout} />
      )}
    </NavigationContainer>
  );
}
