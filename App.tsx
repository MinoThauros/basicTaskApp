import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal
} from "react-native";
import WeclomeScreen from "./components/welcomeScreen";

export default function App() {
  const [Process,SetProcess]=useState(false);
  const [newGoal, SetNewGoal]=useState([]);

  const StartProcess=()=>{
    SetProcess(true);
    console.log('Button clicked')
  };


  const goBack=()=>{
    SetProcess(false);
    console.log('we are back')
  };
  return(
    <View>
      <Modal visible={!Process}>
      <WeclomeScreen onSetProcess={StartProcess}/>
    </Modal>
    <View>
      <Text>
        The Content will be here
      </Text>
      <Button title="go back" onPress={()=>{goBack()}}/>
    </View>
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

})

/**
 * general flow: welcome page w/ start goals button -> page with add goal button -> page with goal list
 * + make goal input process an overlay so that it prompts up temporarily and then goes back to the goal list
 * +
 */

/** Tech concerns:
 * Add type-checking to props
 * add typechecking to list of tasks
 */