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
    const [incomingTyping,SetIncomingTyping]=useState('');

    const passingText=()=>{
        //pass the final value of the input to the parent component
        props.onEnteredText(incomingTyping);
        SetIncomingTyping('');//clear the state before next input

    };
    

    return(
        <View style={styles.title}>
            <TextInput 
        onChangeText={SetIncomingTyping} //callback syntax
        placeholder="enter your next goal here"
        autoCorrect={false}
        />
        <Button title="add" onPress={()=>passingText()}/>
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