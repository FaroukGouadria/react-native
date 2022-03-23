/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-catch-shadow */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {SafeAreaView, ScrollView, StyleSheet, Text, View,ToastAndroid,FormContainer} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputText from '../Components/TextInput';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {StackActions} from '@react-navigation/routers';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    text:'',
  });
  const [error,setError] = useState('');

  const handleSubmit = async () => {
    try {
      const user = {
        email,
        password,
      };
      if (email === '' && password === ''){
        setError('fill the credential can not be null');
        ToastAndroid.show('Please fill in your credential',ToastAndroid.SHORT);
      } else {
          ToastAndroid.show('Success',ToastAndroid.SHORT);
      }
      const {data} = await axios.post('http://192.168.135.99:8000/signin',{...user});
      console.log('token : ',data.token);
      let token = data.token;
      if (token != null){
          await AsyncStorage.setItem('token',token);
          console.log(token);
      } else {
               console.log(error?.response?.data);
              }
        await props.navigation.replace('home');
        return {data};
    } catch ( error ) {
     const msg = await setMessage(error?.response?.data);
      ToastAndroid.show(`${msg}`,ToastAndroid.SHORT);
      console.log(error?.response?.data);
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Créer un compte</Text>
        {/* <Text style={{margin: 20, textAlign: 'center'}}>{message}</Text> */}
        <View>
          <InputText
            placeholder="Email"
            iconName="email-outline"
            label="Email"
            value={email}
            onChangeText={email => setEmail(email)}
            keyboardType="email-address"
          />
          <InputText
            placeholder="Password"
            iconName="lock-outline"
            label="password"
            password
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Text onPress={()=>props.navigation.navigate('forgotPassword')}
            style={{
              textAlign: 'right',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 18,
              fontSize: 16,
              marginBottom: 40,
            }}>
            Mot de passe oublié ?
          </Text>
          <Button title="Se Connecter" onPress={handleSubmit} />
          <Text
            onPress={() => props.navigation.navigate('register')}
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: '400',
              alignItems: 'center',
              lineHeight: 18,
              textAlign: 'center',
              marginTop: 30,
            }}>
            Vous n’avez pas encore un compte ? Créer un compte
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FF6B6B',
    flex: 1,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    lineHeight: 35,
    fontWeight: '700',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
});
export default LoginScreen;
