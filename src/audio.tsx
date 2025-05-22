import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import Audio from "src/assert/ringbell.mp3";//

const audio = () => {
  return (
    <View>
     {/* <audio
       source={Audio}
       style={{width:50,height:50}}
       />*/}
      <audio
       controlsList={require('.src/assert/ringbell.mp3')}
       style={{width:50,height:50}}
       controls={true}
       autoPlay={true}
       />

    </View>
  )
}

export default audio

const styles = StyleSheet.create({})