import React from 'react';
import { View , StyleSheet ,Text , TouchableOpacity } from 'react-native';

const Button = (props) => {
 return (
     <TouchableOpacity style = {[styles.buttonstyle , props.style]} onPress = {props.onbuttonclick}>
        <Text style = {[styles.textstyle , props.textstyle]}>{props.children}</Text>
     </TouchableOpacity>
    
 );
};
export  {Button};

const styles = StyleSheet.create({
    buttonstyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth:1,
      borderColor: '#2B328C',
        marginLeft: 5,
        marginRight: 5,

    },
    textstyle:{
         alignSelf: 'center',
         color: '#2B328C',
         fontSize:12,
         fontFamily: 'IRANSansWeb_Medium',
         paddingTop:10,
         paddingBottom:10

    }
    
  });