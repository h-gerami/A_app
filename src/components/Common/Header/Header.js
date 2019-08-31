import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

const Header = (props) => {
 return (
    <View style = {styles.headercontainer}>
        <Text style = {styles.header}>{props.headertext}</Text>
    </View>
 )
}
export {Header};

const styles = StyleSheet.create({
  headercontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
    shadowColor : 'black',
    shadowOffset: {width: 0 , height:10},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'

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