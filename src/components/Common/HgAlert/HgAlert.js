import React from 'react';
import { View , StyleSheet  } from 'react-native';
import Dialog from "react-native-dialog";
const HgAlert = (props) => {
  const second = props.secondbutton;
  let secondButton;
  if (second) {
            secondButton = <Dialog.Button
            style = {styles.Button}
            onPress={props.onSecondButtonClick}
            label= {props.secondButtonLabel}
        />
  } else {
    secondButton = null;
  }
 return (
   
    <View>
    <Dialog.Container  visible={props.visible}>
    
    {props.title ? <Dialog.Title style = {styles.title}>{props.title}</Dialog.Title> : <Dialog.Title style = {styles.title}>اشتباهی رخ داده !!</Dialog.Title>}
    
    {props.Description ? <Dialog.Description style = {styles.Description}>
        {props.Description}
    </Dialog.Description> : null}
    {props.insideok ? props.inside : null}
      {props.inside}
    <Dialog.Button
        style = {styles.Button}
        onPress={props.onButtonClick}
        label= {props.buttonLabel}
    />
    {secondButton}
    </Dialog.Container>
</View>
 );
};
export {HgAlert};
const styles = StyleSheet.create({
  title: {
    fontFamily: 'IRANSansWeb_Bold',
    fontWeight:'normal'
  },
  Description: {
    fontFamily: 'IRANSansWeb_Bold',
    fontWeight:'normal'
  },
  Button: {
    fontFamily: 'IRANSansWeb_Bold',
    fontWeight:'normal'
  },
});


