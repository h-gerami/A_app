import React from 'react';
import { View , StyleSheet ,Text } from 'react-native';

const CardSection = (props) => {
 return (
    <View style = {[styles.container, props.style]}>
       {props.children}
    </View>
 );
};
export  {CardSection};

const styles = StyleSheet.create({
    container: {     
      borderBottomWidth: 1,
      padding:5,
      backgroundColor:'#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
  
    },
    welcome: {
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
  