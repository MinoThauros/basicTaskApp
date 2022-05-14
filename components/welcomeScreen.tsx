import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
  } from "react-native";


const WeclomeScreen=(props:any)=>{
    const [Process,SetProcess]=useState(false)
  return (
    <View>
        <View style={styles.title}>
      <Text style={styles.titleText}>Welcome to the Objectives App</Text>
    </View>
    <Button title="start entering goals" onPress={props.onSetProcess}/>  
    {/**props.onSetProcess triggers function right away */}
    </View>
  )

};

const styles = StyleSheet.create({
    mainBody: {
    },
    title:{
      padding:50,
      backgroundColor:'red',
    },
    titleText:{
      textAlign:'center',
    }
  
});
export default WeclomeScreen