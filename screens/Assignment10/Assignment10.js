import React,{ useState } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


const getLocationUser = async () => {
    if (hasLocationPermission) {
    
    }
    
  };


function LocationScreen(props) {
     //   getLocationUser();
     const [UserLattitude, setUserLattitude] = useState("Waiting for location");
     const [UserLongitude, setUserLongitude] = useState("Waiting for location");
    
     Geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
            const {coords:{latitude,longitude}}=position;
            console.log(latitude);
            setUserLattitude(`Latitude- ${latitude}`)
            console.log(longitude);
            setUserLongitude(`Longitude- ${longitude}`)
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );


   // getLocationUser();
    return (
       <View style={styles.container}>

           <Text>`loc`</Text>
           <Text>{UserLattitude}</Text>
           <Text>{UserLongitude}</Text>
       </View>
    );
}



const styles = StyleSheet.create({
    container: {
        alignItems:'center', 

        justifyContent:'center', 
    
        flex: 1 
    
     
    },
  });
export default LocationScreen;