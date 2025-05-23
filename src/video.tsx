import { StyleSheet, Text, View,Dimensions } from 'react-native';
import React from 'react';
import Video from 'react-native-video';


const Videoplayer = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Local Video</Text>
      <Video 
        source={require('./assert/ringbell.mp3')}
        style={styles.video}
        controls
        resizeMode="contain"
        paused={true}
        />
      

    </View>
  );
};
const {width} =Dimensions.get('window');

const styles = StyleSheet.create({
      container:{
            flex:1,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            padding:150,
      },
      title:{
            color:'blue',
            fontSize:20,
            fontWeight:'bold',
            marginBottom:12,

      },
      video:{
            width:width-59,
            height:(width - 56)*0.5625,
      },
});
export default Videoplayer;

