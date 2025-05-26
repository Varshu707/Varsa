import  React ,{ useRef } from "react";
import { TextInput,Button,View } from "react-native";
export default function InputFocus(){
      const inputRef =useRef<TextInput>(null);

      const focusInput =() =>{
            inputRef.current?.focus();

      };
      return(

            <View style={{
                  padding:20,
                  
            }}>
                  <TextInput ref={inputRef} placeholder="Type here"/>
                  <Button title="Focus Input" onPress={focusInput}/>
            </View>
      );
}; 
