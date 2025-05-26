import { Button, Text, View } from 'react-native'
import React,{useState,useMemo}from 'react';

export default function Counter(){
       const[count,setCount] =useState(0);
       const [decrement,setDecrement] = useState(10);
       const computedMessage=useMemo(() =>{
            return `The result of count minus decrement is: ${count-decrement};`

       },[count,decrement]);



      

  return (
    <View style={{
      padding:100,
      

    }}>
    
      
      <Text>Count: {count}</Text>
      <Button title='Increase' onPress={()=> setCount(count +1)}/>
            <Text>
            Decrement:{decrement}
            </Text>
            <Button title='Decrement' onPress={()=> setDecrement(decrement -1)}/>
                  <Text>{computedMessage}</Text>

    </View>
  );
};

