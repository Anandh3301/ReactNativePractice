import React, { useState } from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  ScrollView,
  RefreshControl,
} from 'react-native';

  const MobileList = () => { 

  

    const [Items, setItems] = useState([ 
  
      { key: 1, item: 'Xiaomi' }, 
  
      { key: 2, item: 'Acer' }, 
  
      { key: 3, item: 'Samsung' }, 
  
      { key: 4, item: 'Iphone' }, 
  
      { key: 5, item: 'Realme' }, 
  
      { key: 6, item: 'Micromax' }, 
  
      { key: 7, item: 'Oppo' }, 
  
      { key: 8, item: 'Vivo' }, 
  
      { key: 9, item: 'HTC' }, 
  
      { key: 10, item: 'Nokia' }, 
  
      { key: 11, item: 'Helio' }, 
  
    ]); 
  
    const [text, onChangeText] = React.useState("Update name"); 
  
    const [placeholder, setPlaceholder] = React.useState("Placeholder"); 
  
    const [Refreshing,setRefreshing]=useState(false) 
  
    const onRefresh=()=>{ 
  
      setRefreshing(true) 
  
      setItems([...Items,{key:Items.length+1,item:"Item"+String(Items.length+1)}]); 
  
      setRefreshing(false) 
  
   
   
  
    } 
  
     
  
   
  
   
   
  
    return ( 
  
     <View style={styles.container}> 
  
       <View> 
  
   
   
  
         <Text style={styles.text}>{placeholder}</Text> 
  
       </View> 
  
       <ScrollView 
  
       refreshControl={<RefreshControl  
  
        refreshing={Refreshing} 
  
        onRefresh={onRefresh} 
  
        
  
       />} 
  
       > 
  
    { 
  
      Items.map((object)=>{ 
  
   
   
  
        return( 
  
   
   
  
    <View style= {styles.item} key={object.key}  onStartShouldSetResponder={() => {Alert.alert(object.item); setPlaceholder(object.item)}}> 
  
        <Text style={styles.text}>{object.item}</Text> 
  
      </View> 
  
      
  
        ) 
        
  
   
   
   
  
      }) 
  
    } 
  
    </ScrollView> 
  
   </View> 
  
     
  
    ); 
  
  }; 
  
   
   
  
  const styles = StyleSheet.create({ 
  
    container: { 
  
      
  
       
  
      flex: 1 
  
       
  
    }, 
  
    item: { 
  
      backgroundColor:'#4ae1fa', 
  
      justifyContent:'center', 
  
      margin: 10, 
  
    }, 
  
    text: { 
  
      color: '#000000', 
  
      fontSize: 45, 
  
      fontStyle: 'italic', 
  
      margin: 10, 
  
    }, 
  
     
  
  }); 
  

  export default MobileList;