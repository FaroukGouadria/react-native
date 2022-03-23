/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title,onPress = ()=>{}})=> {
  return <TouchableOpacity onPress={onPress} style={{height:50, width:'80%', backgroundColor:'#ffffff',alignItems:'center',justifyContent:'center',marginVertical:20,marginHorizontal:35,borderRadius:25,fontSize:18}}>
      <Text style={{color:'#99A4EA',fontWeight:'bold',fontSize:18}}>{title}</Text>
  </TouchableOpacity>;
};
export default Button;
