/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   FlatList,
   TouchableOpacity,
   Alert
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 ////////////////////////////////////////////////// Assignments
 
 import HeaderUpdate from './screens/Assignmentonetwo/Assignment_1_2';
 import MobileList from './screens/Assignmentthreefour/Assignment34';
 
 import PasswordScreen from './screens/Assignmentfivesix/Assignment56';
 import FruitLists from './screens/Assignmentfivesix/Assignment6';
 import Fruitsa from './screens/Assignmentfivesix/Assignment6v2';
 
 import CalculatorComponent from './screens/Assignment7/Assignment7';
 
 import Assignment9 from './screens/Assignment9/Assignment9';
 
 import LocationScreen from './screens/Assignment10/Assignment10';
 
 import LocalnotificationScreen from './screens/Assignmenteleventwelvethirteen/Assignment12';
 
 
 
 
 
 
 
 //////////////////////////////////////////////////
 
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
 });
 
 
 
 const Stack = createNativeStackNavigator();
 function App() {
   
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Details" component={HeaderUpdate} />
         <Stack.Screen name="Mobiles" component={MobileList} />
         <Stack.Screen name="Password" component={PasswordScreen} />
         <Stack.Screen name="Fruitl" component={FruitLists} />
         <Stack.Screen name="Fruits" component={Fruitsa} />
         <Stack.Screen name="Calculator" component={CalculatorComponent} />
 
         <Stack.Screen name="Calendar" component={Assignment9} />
 
         <Stack.Screen name="Geolocation" component={LocationScreen} />
 
 
         <Stack.Screen name="LocalNotif" component={LocalnotificationScreen} />
         
       </Stack.Navigator>
     </NavigationContainer>
   );
   }
 
 
 
 
 
 
 
 
 
 
 const HomeScreen = ({navigation}) => {
 
   const navigateToScreen=(number)=>{
     switch(number)
     {
       case 1:
         console.log('in nav 1')
         navigation.navigate('Details')
         
     // code block
 
     break;
   case 2:
     console.log('in nav 2')
     navigation.navigate('Mobiles')
     
     // code block
     break;
     case 3:
       console.log('in nav 3')
       navigation.navigate('Password')
       
       // code block
       break;
 
       case 4:
         console.log('in nav 4')
         navigation.navigate('Calculator')
         
         // code block
         break;
 
 
 
       case 5:
         console.log('in nav 5')
         navigation.navigate('Calendar')
         
         // code block
         break;
 
         case 6:
           console.log('in nav 6')
           navigation.navigate('Geolocation')
           
           // code block
           break;
 
           case 8:
             console.log('in nav 8')
             navigation.navigate('LocalNotif')
             
             // code block
             break;        
       
        
 
 
   default:
     // code block
     }
 }
 
 
   console.log('ok');
   return (
     <View style={styles.container}>
       <FlatList
         data={[
           {title: 'Assignment 1 and 2 : Edit Button',key:1},
           {title: 'Assignment 3 and 4 : Mobiles',key:2},
           {title: 'Assignment 5 and 6 : Login and Fruits',key:3},
           {title: 'Assignment 7: Calculator',key:4},
           {title: 'Assignment 8: not done',key:888},
           {title: 'Assignment 9 : Calendar',key:5},
           {title: 'Assignment 10 : Geolocation',key:6},
           {title: 'Assignment 11 : Not done',key:7},
           {title: 'Assignment 12 : Local notification',key:8},
           {title: 'Assignment 13 : Push notification',key:9},
           {title: 'Assignment 14 : Camera',key:10},
           {title: 'Assignment 15 : Not done',key:11},
           
         ]}
         renderItem={({item}) => 
        <View  onStartShouldSetResponder={()=>{console.log(item.title);navigateToScreen(item.key) }} >
        
         
         
         <Text style={styles.item}>{item.title}</Text>
        
         </View>
         }
       />
     </View>
   );
 }
 
 export default App;