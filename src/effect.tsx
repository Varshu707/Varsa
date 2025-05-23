import { TouchableOpacity, Text, View } from 'react-native'
import React ,{useEffect,useState} from 'react';

export default function Timer(){
      const[seconds,setSeconds] =useState(0);
      useEffect(() =>{
            const interval= setInterval(()=>{
                  setSeconds(s => s+1);
            },1000);
      


return () => clearInterval(interval);
},[]);
  return (
    <View style={{
      padding:100,
      justifyContent:'center',
      alignItems:'center',
    }}>
      <Text>Seconds: {seconds}</Text>
      <TouchableOpacity onPress={ ()=> setSeconds(0)}>
      <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};



