import React from 'react';
import {Text, View , TextInput , StyleSheet } from 'react-native';
import {wp , hp} from '../../styles/CustomStyle'
const Input = (props) => {
 return (
    <View style = {[styles.container , props.style]}>
        <View style = {{ alignSelf:'stretch',flexDirection: 'row', height: 25 , position:'relative'}}>
          <Text style = {[styles.label , props.labelStyle]}>{props.label}</Text>
          <Text style = {styles.validatetext}>{props.validatetext}</Text>
        </View>
        <TextInput
          keyboardType = {props.keyboardType}
          placeholder = {props.placeholder}
          autoCorrect = {false}
          style = {[styles.input , props.inputStyle]}
          
          value = {props.value}
          onChangeText = {props.OnchangeTextHandler}
        />
    </View>
 )
}
export {Input};

const styles = StyleSheet.create({
    input: {
      fontFamily: 'IRANSansWeb_Medium',
      color: 'white',
      paddingRight: 10,
      paddingLeft: 5,
      fontSize: wp(3),
      lineHeight: 23,
      flex :1,
      textAlign:'center',
      borderWidth:1,
      borderColor: 'white',
      alignSelf:'stretch',
      borderRadius: 5 ,
      marginRight: 5,
      marginLeft: 5
    },
    label:{
      fontSize: wp(3),
      paddingRight:5,
      
      fontFamily: 'IRANSansWeb_Medium',
      
      color: 'white'
    },
    validatetext:{
      fontSize:wp(2),
      paddingLeft:5,
      position: 'absolute',
      right: 0,
      fontFamily: 'IRANSansWeb_Medium',
      
      color: 'red'
    },
    
    container: {
      height: 80,
      flex:1 ,
      flexDirection: 'row',
      alignItems: 'center'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });