/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {SafeAreaView,ScrollView,StyleSheet,Text,View} from 'react-native';
import React,{useState} from 'react';
import InputText from '../Components/TextInput';
import Button from '../Components/Button';
import axios from 'axios';


const RegisterScreen = ({route,navigation})=> {
    const [nom,setNom] = useState(null);
    const [prenom, setPreNom] = useState(null);
    const [pays, setPays] = useState(null);
    const [ville, setVille] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
// onClickSignup = async ()=>{
//   if (email === '' && password === '' && nom === '' && preNom === '' && pays === '' && ville === ''){
//         ToastAndroid.show('Please fill in your credential',ToastAndroid.SHORT);
//   }
  let user = {
      nom:nom,
      prenom:prenom,
      ville:ville,
      pays:pays,
      email:email,
      password:password,
  };
 const onClickSignup = async () => {
 try {
  const { data } = await axios.post('http://192.168.135.99:8000/create',{...user});
  console.log(data);
    const profile = data.user;
    console.log(profile.id);
    navigation.push(('verification'),{profile:profile});
 } catch (error) {
     console.log(error,`${data.response.error}`);
 }
};
  return (
    <SafeAreaView style={styles.root}>
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Créer un compte</Text>
            <Text>b</Text>
            <View Style={[styles.user]}>
                <InputText placeholder="nom" iconName="email-outline" value={nom} onChangeText={nom=>setNom(nom)}/>
                 <InputText placeholder="prenom" iconName="email-outline" value={prenom} onChangeText={prenom=>setPreNom(prenom)}/>
                </View>
            <View>
                  <InputText placeholder="pays" iconName="email-outline" value={pays} onChangeText={pays=>setPays(pays)} />
                   <InputText placeholder="ville" iconName="email-outline"value={ville} onChangeText={ville=>setVille(ville)}/>
                    <InputText placeholder="Email" iconName="email-outline"value={email} onChangeText={email=>setEmail(email)}/>
                    <InputText placeholder="mot de passe" iconName="lock-outline"value={password} onChangeText={password=>setPassword(password)}/>
                   <InputText placeholder="confirmer mot de passe" iconName="lock-outline"/>
                  <Button title="Cree un Compte" onPress={onClickSignup}/>
                  <Text  onPress={() => navigation.navigate('login')} style={{color:'#ffffff',fontSize:16, fontStyle:'normal',fontWeight:'400',alignItems:'center',lineHeight:18, textAlign:'center'}}>Vous avez déja un compte ? Connectez-vous</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    root:{
        backgroundColor:'#FFA0F2',
        flex:1,
    },
    container:{
        paddingTop:30,
        paddingHorizontal:20,
    },
    title:{
        color:'white',
        fontSize:30,
        lineHeight:35,
        fontWeight:'700',
        textTransform:'capitalize',
        fontStyle:'normal',
    },
    user:{
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
    },
});

export default RegisterScreen;
