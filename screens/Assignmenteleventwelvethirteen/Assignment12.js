import React,{ useEffect } from 'react';
import { Button } from 'react-native-elements';
import {View,Text, StyleSheet} from 'react-native';
//import PushNotification from "react-native-push-notification";




const sendlocalnotification = ()=>{

}


const LocalnotificationScreen = (props)=> {

  /*  useEffect(() => {
  
        createChannels();
    }, []
    
    );
    */
    

    
const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
}

    return (
        <View style={styles.container}>
            <Button 
            
            title="Send Notificatiom"
            onPress={sendlocalnotification}
            
            
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
})

export default LocalnotificationScreen;