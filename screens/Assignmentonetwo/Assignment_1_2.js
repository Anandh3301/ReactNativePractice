import React,{useState} from 'react';
import {
    Button,
    TextInput,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  const HeaderUpdate = () => { 

    const [count,setCount]= useState(0) 
  
    const onClickHandler=()=>{ 
  
      setCount(count+1) 
  
    } 
  
    const [text, onChangeText] = React.useState("Update name"); 
  
     
  
     

   
   
  
    return ( 
  
    <View style={styles.container}> 
  
      <Text style= {styles.sectionTitle}>{count*5}</Text> 
  
      <Button  title={text} onPress={onClickHandler}></Button> 
  
      <Text style= {styles.sectionTitle}>you clicked {count} times</Text> 
  
      <TextInput 
  
          style={styles.input} 
  
          onChangeText={onChangeText} 
  
          value={text} 
  
        /> 
  
          
  
   
   
  
    </View> 
  
    ); 
  
  }; 
  
   
   
  
  const styles = StyleSheet.create({ 
  
    container: { 
  
      backgroundColor: 'blue', 
  
      alignItems:'center', 
  
      justifyContent:'center', 
  
      flex: 1 
  
       
  
    }, 
  
    sectionContainer: { 
  
      marginTop: 32, 
  
      paddingHorizontal: 24, 
  
    }, 
  
    sectionTitle: { 
  
      fontSize: 24, 
  
      fontWeight: '600', 
  
    }, 
  
    sectionDescription: { 
  
      marginTop: 8, 
  
      fontSize: 18, 
  
      fontWeight: '400', 
  
    }, 
  
    highlight: { 
  
      fontWeight: '700', 
  
    }, 
  
  }); 
  
   
   
  
  export default HeaderUpdate; 