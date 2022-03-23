/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import VerificationScreen from '../screens/Verification';
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (<><Stack.Screen name="login" component={LoginScreen} /><Stack.Screen name="register" component={RegisterScreen} /><Stack.Screen name="home" component={HomeScreen} /><Stack.Screen name="verification" component={VerificationScreen} /></>);

};

export default AuthNavigator;
