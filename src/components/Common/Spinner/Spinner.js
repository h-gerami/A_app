import React from 'react';
import {Text, View , ActivityIndicator , StyleSheet } from 'react-native';

const Spinner = (props) => {
 return (
    <View style = {styles.spinnerStyle} >
        <ActivityIndicator color="#2B328C" size = {props.size || 'large'}/>
    </View>
 );
};
export {Spinner};
const styles = StyleSheet.create({
    spinnerStyle:{
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
    }
})