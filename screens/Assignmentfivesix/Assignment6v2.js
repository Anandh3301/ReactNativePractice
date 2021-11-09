
import React from 'react';
import { View, Image, StyleSheet,Alert } from 'react-native';




const  Fruitsa = ({route,navigation}) => {
    const {key,fruitname,fruit_url} = route.params;
    
    Alert.alert(`${fruitname} ${key}`)



  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={fruits[key-1].fruit_uri}
        style={styles.image}
      />
    
      
    </View>
  );
}




const styles = StyleSheet.create({
    container: { 
        alignItems:'center', 
        justifyContent:'center', 
        flex: 1 
      }, 

      image:{
        width:300,
        height:300,
        borderWidth:2,
        borderColor:'#d35647',
        resizeMode:'contain',
        margin:8
      }
  
});








const fruits=[
    { key:1,
      fruitname: 'apple',
    fruit_uri: require('./assets/apple.png'),
    },

   {
    key:2, 
    fruitname:'mango',
   fruit_uri: require('./assets/mango.png'),
   }

,

   {
    key:3, 
    fruitname:'banana',
   fruit_uri: require('./assets/banana.png'),
    },

    {
      key:4,
      fruitname:'avocado',
   fruit_uri: require('./assets/avocado.png'),
    },

    {
      key:5,
      fruitname:'grapes',
   fruit_uri: require('./assets/grapes.png'),
    },

    {
      key:6,
      fruitname:'lemon',
   fruit_uri: require('./assets/lemon.png'),
    },

    {
      key:7,
      fruitname:'pear',
   fruit_uri: require('./assets/pear.png'),
    },

    {
      key:8,
      fruitname:'watermelon',
   fruit_uri: require('./assets/watermelon.png'),
    },

   
]

export default Fruitsa;