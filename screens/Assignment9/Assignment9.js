import React from 'react';
import Calerndar from '../components/Calendar';
import {View,Text, StyleSheet} from 'react-native';

function Assignment9(props) {
    return (
       <View style={styles.container}>
           <Calerndar></Calerndar>
       </View>
    );
}
const styles = StyleSheet.create({ 

  container: { 

   

    alignItems:'center', 

    justifyContent:'center', 

    flex: 1 

     

  },} );

export default Assignment9;