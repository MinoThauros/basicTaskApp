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
import GoalItem from "./components/GoalItem";
//we could use a function to make sure that states are sequencially; no "chevauchement"
export default function App() {
  const [Process,SetProcess]=useState(false);
  const [Goals, SetNewGoals]=useState([]as any[]);
  const [key,SetKey]=useState(1);
  const [emptyGoals,SetEmptyGoals]=useState(false);
  const [goalInput, SetGoalInput]=useState(false);
  
  
  const StartProcess=()=>{
    SetProcess(true);
    SetEmptyGoals(true);//in order to control the value of the title depending on the state
    //need to define the title  as a function whose return varies depending on state
    console.log('Button clicked')
  };

  const enteredText=(enteredText:string)=>{
    if (enteredText==""){
      return
    }
    SetNewGoals((storedGoals:any[])=>[...storedGoals,{id:getCurrentKey(),value:enteredText}]);
    console.log(enteredText);
    addGoal()
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

  const getCurrentKey=()=>{
    const currentKey=key;
    return currentKey;

  }

  const title=(isPastWelcomeScreen:boolean)=>{
    if (Process!=true){
      return 
    }
  };

  const DeleteItem=(key:number)=>{
    //Goals.filter((item:any)=>item.id!=key);
    //how to get id of touched item?
    SetNewGoals((storedGoals:any[])=>storedGoals.filter((item:any)=>item.id!=key));
    //to access and update state, always use SetState
    console.log(key);
  };

  const clearGoals=()=>{
    SetNewGoals([]);
  }
  

  return(
    <View>
      <Modal visible={!Process}>
          <WeclomeScreen onSetProcess={StartProcess}/>
      </Modal>
      <View style={styles.title}>
        <Button title="go back" onPress={()=>{goBack()}}/>
      </View>
      {Goals.map((goal)=>{return(
        <GoalItem
          key={goal.id} 
          title={goal.value}
          onDelete={DeleteItem}
          id={goal.id}
          />)})}
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
 * New cool shit we could add:
 * * * + Allow goals to be dismissable after done + * * *; play with props.children
 * + Style the title
 * + Add background image
 * + Make goals into thin cars like to-do
 */

