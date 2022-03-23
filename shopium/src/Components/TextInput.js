/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Input,StyleSheet, TextInput} from 'react-native';
import React,{useState} from 'react';
export const Colors = {
    black:'#000000',
    white:'#ffffff',
    red:'#FC040F',
    darkblue:'#99A4EA',
};
const InputText = ({label,iconName,error,password,onFocus = ()=>{},...props})=> {
    const [isFocused,setIsFocused] = useState(false);
    const [hidePassword,setHidePassword] = useState(password);
  return (
    <View style={{ marginBottom:10 }}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.input, {
            borderColor:error
            ? Colors.red : isFocused ? Colors.black : Colors.white,
            },
        ]}>
                {/* <Icon name={iconName} style={{fontSize:22, color:'black', marginRight:10}}/> */}
            <TextInput
            secureTextEntry={hidePassword}
            autoCorrect={false}
            onFocus={()=>{
                onFocus();
                setIsFocused(true);
            }}
            onBlur={()=>{
                setIsFocused(false);
            }}
            style={{color:Colors.white, flex:1}} {...props} />
            {/* {password && (
                <Icon
                onPress={()=>setHidePassword(!hidePassword)}
                style={{fontSize:22,color:Colors.black}}
                name={hidePassword ? 'eye' : 'eye-off'}/>
            )} */}
        </View>
        {error && (
            <Text style={{color:Colors.red,fontSize:12,marginTop:7}}>{error}</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
    label:{
    marginVertical:5,
     fontSize:14,
    color:'white',
    },
    input:{
    height:50,
    width:341,
    borderRadius:6,
    flexDirection:'row',
    backgroundColor:'transparent',
    paddingHorizontal:15,
    borderWidth:0.5,
    alignItems:'center',
    },
});
export default InputText;
