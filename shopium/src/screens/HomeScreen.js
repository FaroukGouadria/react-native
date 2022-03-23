/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text,Image} from 'react-native';
import React,{useState} from 'react';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({navigation})=> {
  const [imageUri,setImageUri] = useState('');
  // const [image,setImage] = useState({});
  const handleLogOut = async ()=>{
      await AsyncStorage.removeItem('token').then(()=>{
         navigation.replace('login');

      });
    //  await AsyncStorage.clear('token');
    console.log('logout');

  };

  const handlePicture = async () =>{
    // let options = {
    //   storageOption: {
    //     path:'image',
    //     mediaType:'photo',
    //     skipBackup: true,
    //     saveToPhotos: true,
    //   },
    //   includeBase64:false,
    // };
    // launchCamera(options,response=>{
    //     console.log('response :',response);
    //     if (response.didCancel){
    //       alert('user cancelled image picker');
    //     } else if (response.errorMessage){
    //       alert(response.errorMessage);
    //     } else if (response.customButton){
    //       // console.log('user tapped custom button', response.customButton);
    //     } else {
    //           const source = {uri :'data:image/jpeg;base64,' + response.assets.uri};
    //           setImageUri(source);
    //           console.log('response:', JSON.stringify(response));
    //     }
    //     console.log('image',source);
    //     return {source};
    //   });
  };
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'#FF6B6B',margin:40}}>HomeScreen</Text>
      <Button title="Logout" onPress={handleLogOut}/>
      <Image source={{imageUri}} style={{height:100,width:200, borderRadius:40,borderWidth:2,borderColor:'red'}} />
      <Button title="camera" onPress={handlePicture}/>
    </View>
  );
};
export default HomeScreen;
