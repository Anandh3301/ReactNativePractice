import React,{ useState } from 'react';
import {View,Text, StyleSheet,FlatList,Image,Alert,TouchableOpacity} from 'react-native';
import { ListItem, Avatar,Button } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
 



const FruitLists=({route,navigation})=> {
    const data= route.params;
    const {email,password}=data;
    console.log(data)
    //const {email,password}=data
    const x=5;
    const [Fruits, setFruits] = useState(
        [
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
    );

    //defining list
   

  
   
   
    return (
       <View style={styles.container}>
           <Text>
               {email}
           </Text>
           <Text>
               {password}
           </Text>
           <FlatList 
      
        showsHorizontalScrollIndicator={false}
        data={Fruits}
        renderItem={({ item }) => (
          <TouchableOpacity
          
          
          >
        <View style={styles.row}
         key={item.name}  

        onStartShouldSetResponder={() => {
          
          const datast={fruitname:'arajans',fruit_uri: item.fruit_uri}
        navigation.navigate('Fruits',{...item})
        
        
        }
          
          }>
       
        
         
          
         <Image 
          
                source={(item.fruit_uri)}
                style={{
                    width:50,
                    height:50,
                    borderWidth:2,
                    borderColor:'#d35647',
                    resizeMode:'contain',
                    margin:8
                }}
            />
           
              <Text style={styles.title}>{item.fruitname}</Text>

            </View>
            </TouchableOpacity>
       
       
       
       )}
    />
      </View>
           
     
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  row: {
    flexDirection: "row",
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});


export default FruitLists;