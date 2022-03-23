/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/onBoardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterScreen from './src/screens/RegisterScreen';
import VerificationScreen from './src/screens/Verification';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import FavoriesScreen from './src/screens/FavoriesScreen';
import FideliteScreen from './src/screens/FideliteScreen';
import ProfileScreen from './src/screens/ProfilScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  const [isLoggedIn, setIsLogged] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5000);
  }, [showSplashScreen]);
  useEffect(() => {
    const appData = AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
    // AsyncStorage.removeItem('isAppFirstLaunched');
  });
  const detectionLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };
  useEffect(async () => {
    detectionLogin();
  }, []);
  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {/*  */}
          {showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
          ) : null}
          {isAppFirstLaunched && (
            <Stack.Screen
              name="onBoarding"
              component={OnboardingScreen}
              options={{headerShown: false}}
            />
          )}

          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="verification"
            component={VerificationScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="forgotPassword"
            component={ForgotPasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="resetPassword"
            component={ResetPasswordScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="favories"
            component={FavoriesScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="fidelite"
            component={FideliteScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;
