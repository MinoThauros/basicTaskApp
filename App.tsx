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
  const [Goals, SetNewGoals]=useState([]as String[]);
  const [key,SetKey]=useState(1);
  const [emptyGoals,SetEmptyGoals]=useState(false);

  const StartProcess=()=>{
    SetProcess(true);
    SetEmptyGoals(true);//in order to control the value of the title depending on the state
    console.log('Button clicked')
  };


  const goBack=()=>{
    SetProcess(false);
    console.log('we are back')
  };

  const newId=()=>{
    SetKey(key+1);
  };

  const title=(isPastWelcomeScreen:Boolean)=>{
    if (Process!=true){
      return 
    }
  };


  const MockArray : String[]=["salut","bye","lol","caca"];


  return(
    <View>
      <Modal visible={!Process}>
          <WeclomeScreen onSetProcess={StartProcess}/>
      </Modal>
      <View style={styles.title}>
          {MockArray.map((goal)=>{<Text>{goal}</Text>})}
        <Button title="go back" onPress={()=>{goBack()}}/>
      </View>
      {MockArray.map((goal)=>{return(<Text>{goal}</Text>)})}
      <View>
        <Button title="Add your goals" onPress={()=>{}}/>
      </View>
    </View>
    
    
  )
  
};

const styles = StyleSheet.create({
  mainBody: {
  },
  title:{
    padding:50,
    backgroundColor:'purple',
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