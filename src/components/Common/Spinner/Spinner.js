import React from 'react';
import {Text, View , ActivityIndicator , StyleSheet } from 'react-native';

const Spinner = (props) => {
 return (
    <View style = {styles.spinnerStyle} >
        <ActivityIndicator color="#9e0b0f" size = {props.size || 'large'}/>
    </View>
 );
};
export {Spinner};
const styles = StyleSheet.create({
    spinnerStyle:{
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'relative'
    }
})