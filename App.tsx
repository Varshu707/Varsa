import { StyleSheet,Text,View } from "react-native";
import React from "react";
//import Ref  from './src/ref';//
//import Theme from './src/theme';
//import Memo from './src/memo';
//import Manual from './src/Manual';
import Welcome from './src/welcome';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack =createNativeStackNavigator();
import Login from './src/login'
const App =()=> {
  return(
   <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Home" component={Login}/>
      <Stack.Screen name="Profile" component={Welcome}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}
export default App;