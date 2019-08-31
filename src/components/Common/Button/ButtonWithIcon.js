import React from 'react';
import { View , StyleSheet ,Text , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonWithIcon = (props) => {
 return (
     <TouchableOpacity style = {[styles.buttonstyle , props.style]} onPress = {props.onbuttonclick}>
        <Text style = {[styles.textstyle , props.textstyle]}>{props.children}</Text>
        <Icon style = {[styles.iconstyle , props.iconstyle]} name={props.iconname} size={props.iconsize} color={props.iconcolor} />
     </TouchableOpacity>
    
 );
};
export  {ButtonWithIcon};

const styles = StyleSheet.create({
    buttonstyle: {
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
          height: 0,
          width: 0
      },
      elevation: 2,
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 3,
      borderWidth:1,
      borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textstyle:{
        //  flex:1,
         alignSelf: 'center',
         textAlign:'center',
         color: '#007aff',
         fontSize:14,
         fontFamily: 'IRANSansWeb_Medium',
         paddingTop:10,
         paddingBottom:10,
         marginRight:5,
         marginLeft:5
    },
    iconstyle:{
        // flex:2,
        alignSelf: 'center',
        paddingTop:10,
        paddingBottom:10,
        marginRight:5,
        marginLeft:5

   },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });