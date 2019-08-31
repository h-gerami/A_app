import React from 'react';
import {Text, View , ActivityIndicator , StyleSheet } from 'react-native';
import { wp, hp } from '../../styles/CustomStyle';

const Title = (props) => {
 return (
    <View style = {styles.container} >
       <Text style = {styles.titleStyle}>{props.title}</Text>
       <View style = {styles.bigborder}></View>
    </View>
 );
};
export {Title};
const styles = StyleSheet.create({
    titleStyle:{
      color: '#2B328C',
      fontFamily: 'IRANSansWeb_Bold',
      fontSize:wp(3),
      marginVertical:wp(4)
    },
    container:{
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative' ,
      alignItems:'center',
      marginVertical:10,
      borderBottomWidth:1,
      borderColor:'#00BABE',

    },
    bigborder:{
        position:'absolute',
        bottom:-2,
        height:4,
        width:wp(40),
        backgroundColor:'#2B328C'
    }
})