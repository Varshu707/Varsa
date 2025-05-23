import { StyleSheet, Text, View,Dimensions } from 'react-native';
import React from 'react';
import Video from 'react-native-video';

const VideoPlayer= () => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}> local video </Text>
      <Video 
        source={require('./assert/story.mp4')}
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
            flex:20,
            backgroundColor:'white',
            justifyContent:'center',
            alignItems:'center',
            padding:100,
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
export default VideoPlayer;

