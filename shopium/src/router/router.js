/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import {createAppContainer} from "react-navigation";
const authStack = createNativeStackNavigator({
  signin: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const router = createAppContainer();
export default router;
