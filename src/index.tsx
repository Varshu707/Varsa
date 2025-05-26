import { StyleSheet, Text, View,Image, ImageBackground} from 'react-native';
import React from 'react';
//import Img from './assert/login.png';

const image  = () => {
  return (
    <View>
    
      <Image 
            source={require("./assert/login.png")}
            style={{width:150 ,height:105,justifyContent:'center',alignItems:'center',padding:100,margin:70}}
            />
            
            


    </View>
  );
};

export default image

const styles = StyleSheet.create({})

