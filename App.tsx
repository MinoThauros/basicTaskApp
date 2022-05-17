import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal
} from "react-native";
import WeclomeScreen from "./components/welcomeScreen";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [Process,SetProcess]=useState(false);
  const [Goals, SetNewGoals]=useState([]as String[]);
  const [key,SetKey]=useState(1);
  const [emptyGoals,SetEmptyGoals]=useState(false);
  const [goalInput, SetGoalInput]=useState(false);
  
  
  const StartProcess=()=>{
    SetProcess(true);
    SetEmptyGoals(true);//in order to control the value of the title depending on the state
    console.log('Button clicked')
  };

  const enteredText=(enteredText:string)=>{
    SetNewGoals((storedGoals)=>[...storedGoals,enteredText]);
    console.log(enteredText);
    //issue: triggered on every even change from Goalinput
    //solution: separate concatenation and array state update
  };


  const goBack=()=>{
    SetProcess(false);
    console.log('we are back')
  };

  const addGoal=()=>{
    SetKey(key+1);
    SetGoalInput(false);
  };



  const netItemMaker=(id:Number,element:String)=>{
    //returns a new item with a new id
    //we have the option of either structurally linking the new item to the array or not
    // -or to simply add id as a key to the display
    const newItem={
      key:id,
      value:element
    };
    return newItem;
  }

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
          {MockArray.map((goal)=>{<Text key={key}>{goal}</Text>})}
        <Button title="go back" onPress={()=>{goBack()}}/>
      </View>
      {Goals.map((goal)=>{return(<Text>{goal}</Text>)})}
      <View>
        <Button title="Add your goals" onPress={()=>{SetGoalInput(true)}}/>
      </View>
      <Modal visible={goalInput}>
        <GoalInput 
        onEnteredText={enteredText}
        onAddGoal={addGoal}
        />
      </Modal>
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
 * + Once new goal is written, link it to state in App.tsx and add a key prop to displayed value
 * + GoalInput component should have a button which sends new element to array AND creates new ID
 */

/** Tech concerns:
 * Add type-checking to props
 * add typechecking to list of tasks
 */

/**
 * Execution:
 * a) create goal input component which:
 *  +prompted when the enterGOalbutton is clicked
 *  +sends the entered goal back to App.tsx
 * 
 * 
 * 
 */