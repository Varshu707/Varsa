import  React from 'react';
import {View,Text,Button}from 'react-native';
import useCounterReducer from './useCounterReducer';
export default function Counter(){
      const{count,increment,decrement,reset} =
      useCounterReducer(0);
      return(
            <View>
                  <Text style={{ padding:50}}>Count:{count}</Text>
                  
                  <Button title="Incerase" onPress={increment}/>
                  <Button title="Decerase" onPress={decrement}/>
                  <Button title="Reset" onPress={reset}/>
            </View>
      )
}