import React from 'react';
import { View , StyleSheet ,Text } from 'react-native';

const Card = (props) => {
 return (
    <View style = {styles.container}>
     {props.children}
    </View>
 );
};
export {Card};
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderRadius:2,
    borderColor:'#ddd',
    borderBottomWidth:0,
    shadowColor: '#000',
    shadowOffset : {width:0 , height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation:0 ,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,

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
