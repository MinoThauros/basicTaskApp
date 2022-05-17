import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    TouchableOpacity
  } from "react-native";

const GoalItem=(props:any)=>{
    //we could pass an id to every instance of this component

    const deleteItem=()=>{
        props.onDelete(props.id);
    };


    return(
        <TouchableOpacity onPress={()=>{props.onDelete(props.id)}}>
        <View style={styles.item}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item: {
    },
});

export default GoalItem