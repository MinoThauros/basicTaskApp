import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
  } from "react-native";

const GoalInput=(props:any)=>{
    //create a state within this component so that we only get last value

    return(
        <View style={styles.title}>
            <TextInput 
        onChangeText={props.onEnteredText}
        placeholder="enter your next goal here"
        />
        <Button title="add" onPress={props.onAddGoal}/>
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

export default GoalInput