/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react';
import {View,StyleSheet,Text,KeyboardAvoidingView,TextInput,Dimensions,Button,Keyboard,ToastAndroid} from 'react-native';

const inputs = Array(4).fill('');
let newInputIndex = 0;
const isObjectValid = (obj)=>{
  Object.values(obj).every(val =>val.trim());
};
const  VerificationScreen = ({route,navigation})=> {
  const {profile} = route.params;
  const [nextInputIndex,setNextInputIndex] = useState(0);
  const inp = useRef();
  const [OTP,setOTP] = useState({0:'',1:'',2:'',3:''});
  const handleChangeText = (text,index)=>{
    const newOTP = {...OTP};
    newOTP[index] = text;
    setOTP(newOTP);

    const lastInputIndex = inputs.length - 1;
    if (!text) {newInputIndex = index === 0 ? 0 : index + 1;}
    else
     {newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;}
    setNextInputIndex(newInputIndex);
    console.log(newInputIndex);
  };
useEffect(()=>{
  inp.current.focus();
},[nextInputIndex]);
const onSubmitOPT = async()=>{
  Keyboard.dismiss();
  if (!isObjectValid(OTP)){
    let val = '';

    Object.values(OTP).forEach(element => {
        val += element;
    });
    const otp = val;
    const userId = profile.id;
   try {
    const {data} = await axios.post('http://192.168.203.229:8000/verify-email', {otp, userId});
    if (data.success){
      ToastAndroid.show(`${data.message}`,ToastAndroid.SHORT);
    } else {
       ToastAndroid.show(`${data.error}`,ToastAndroid.SHORT);
    }
     let token = data.token;
    navigation.navigate('login');
  } catch (error) {
    return console.log(error);
  }
    }

};
  return  (
  <KeyboardAvoidingView  style={styles.root}>
      <Text style={styles.text}>
         Please Verify your Email , PIN has been sent to your Email.
        </Text>
        <View style={styles.container}>
            {inputs.map((input,index)=>{
              return (
              <View key={index.toString()}style={styles.input}>
                <TextInput value={OTP[index]} onChangeText={(text)=>handleChangeText(text,index)} style={{ fontSize:25, fontWeight : '600', textAlign:'center', color:'#8469cf',justifyContent:'center', alignItems:'center' }} keyboardType="numeric" maxLength={1} placeholder= "0" ref={nextInputIndex === index ? inp : null}
                />
              </View>
              );
            })}
        </View>
      <View style={{padding:20}}>
          <Button title="Verifier" onPress={onSubmitOPT} style={styles.submitIcon}/>
      </View>
          </KeyboardAvoidingView>);

};
const {width} = Dimensions.get('window');
const inputWidth = Math.round(width / 6);
const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
  },
  text:{
      color:'#8469cf',
      textAlign:'center',
      marginBottom:20,
  },
  input:{
    width:inputWidth,
    height:inputWidth,
    borderWidth:1,
    borderColor:'red',
    textAlign:'center',
    color:'#8469cf',
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:inputWidth / 2,

  },
  submitIcon:{
    paddingHorizontal:inputWidth / 5,
    width:inputWidth / 5,
    alignSelf:'center',
    padding:15,
    backgroundColor:'red',
    borderRadius:50,
    marginTop:15,
  },
});
export default VerificationScreen;
