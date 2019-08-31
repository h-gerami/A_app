import React , {Component} from 'react';
import {TouchableOpacity , Text, View , ActivityIndicator , StyleSheet } from 'react-native';

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
     
        return (
            <View style = {styles.container}>
               <TouchableOpacity onPress = {() => this.setState({visible: !this.state.visible})}>
                                {this.props.children}
                            </TouchableOpacity>
                </View>
        );
    }
};
export default Tooltip;
const styles = StyleSheet.create({
    container:{
      position:'absolute',
      left:0,
      top:0,
      right:0,
      bottom:0,
      backgroundColor: 'black'
      
    }
})