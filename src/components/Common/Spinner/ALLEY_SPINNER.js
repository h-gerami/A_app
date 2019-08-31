import React from 'react';
import {Image ,Text, View , ActivityIndicator , StyleSheet  } from 'react-native';
import { wp , hp } from '../../styles/CustomStyle';

const ALLEY_SPINNER = (props) => {
 return (
    <View style = {[styles.spinnerStyle , props.style ]} >
        <Text style = {styles.alleytext}>سرکوچه</Text>
        <View style = {{flexDirection: 'row' , justifyContent:'center' , alignItems:'center'}}>
            <Text style = {styles.darhale}>در حال دریافت اطلاعات</Text>
            <ActivityIndicator color="white" size = "small"/>
        </View>
    </View>
 );
};
export {ALLEY_SPINNER};
const styles = StyleSheet.create({
    alleytext:{
        fontFamily: 'IRANSansMobile_Bold',
        alignSelf:'center',
        color:'white',
        fontSize:wp(4)
    },
    darhale:{
        fontFamily:'IRANSansMobile_Bold' ,
        color :'#fdfdfd' ,
        fontSize:wp(3),
        marginHorizontal:10
    },
    imagestyle:{
        width:wp(30),
        height: hp(10),
        resizeMode:'contain',
        alignSelf:'center'
    },
    spinnerStyle:{
        marginVertical:wp(10),
      alignSelf:'center',
      justifyContent: 'space-around',
      flexDirection: 'column',
      position: 'relative', 
      height:wp(20),
      width:wp(55),
      backgroundColor:'brown',
      alignItems:'center',
      borderRadius:10,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: {
          height: 0,
          width: 0
      },
      elevation: 2,
    }
})