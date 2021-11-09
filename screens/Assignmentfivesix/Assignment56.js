import React,{useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

const PasswordScreen= ({route,navigation})=>{
   const data= route.params;
    console.log(data)
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={styles.container}>
            <Text>hello world!</Text>
            
          



<Input
  placeholder='email'
  onChangeText={onChangeEmail}
  value={email}
  errorStyle={{ color: 'red' }}
 
 
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>

<Input placeholder="Password" 
onChangeText={onChangePassword}
value={password}
secureTextEntry={true}

leftIcon={
  <Icon
    name='lock'
    size={24}
    color='black'
  />
}


/>

<Button
  title="Login"
  onPress={()=>{navigation.navigate('Fruitl',{email,password})}}
/>

 </View>
    );
//container end
   
}
const styles= StyleSheet.create(
    {
        container:{
            alignItems:'center', 

            justifyContent:'center', 
        
            flex: 1 

        }
    }
)










export default PasswordScreen;