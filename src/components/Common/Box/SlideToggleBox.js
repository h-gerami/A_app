

import React,{Component} from 'react'; 
import {StyleSheet,Text,View,Image, ScrollView, TouchableOpacity , TouchableWithoutFeedback,Animated} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {wp , hp} from '../../styles/CustomStyle'
class SlideToggleBox extends Component{
    constructor(props){
        super(props);
        
    }
    state = {
        bounceValue: this.props.expand === 'false' ? new Animated.Value(wp(0)) : new Animated.Value(hp(35)),
        expand: this.props.expand === 'false' ? false : true
    }
    
    
    onbuttonClick = () => {
        this.setState({expand: !this.state.expand});
            if (this.state.expand) {
                Animated.timing(this.state.bounceValue , {
                    toValue: 0,
                    duration:250
                  }).start();
            } else {
                Animated.spring(this.state.bounceValue , {
                    toValue: hp(35),
                    friction:6
                  }).start();
            }
        
    };
    find_dimesions = (layout) => {
        const {height} = layout;
        console.warn(height);
      }
    render() {
        const expand = this.state.expand;
        let expandicon;
        if (!expand) {
            expandicon = <Icon style = {styles.bottomiconstyle} size = {wp(5)} name = "chevron-down" color = "white" />
        } else {
            expandicon = <Icon style = {styles.bottomiconstyle} size = {wp(5)} name = "chevron-up" color = "white" />
        }
        return(
               
               <View style = {[styles.box , this.props.boxStyle]}>
               <TouchableOpacity  onPress = {() => this.onbuttonClick()}>
                <View style = {styles.button}>
                    <View style = {styles.icontextContainer}>
                        <Icon name = {this.props.iconname} size = {wp(5)} color = "white" />
                        <Text style = {styles.title}>{this.props.title}</Text>
                    </View>
                    {expandicon}
                </View>
                </TouchableOpacity>
                
                <Animated.View style={[{height: this.state.bounceValue , opacity:this.state.bounceValue.interpolate({inputRange:[0 , 100],outputRange:[0,1]})} , styles.contentWrapper]}>
                    <View style = {[styles.container , this.props.containerStyle]}>
                        {this.props.children}
                    </View>
                </Animated.View>
               </View>
        );
    }

}

    
export default SlideToggleBox;
const styles = StyleSheet.create({
    contentWrapper:{
        borderBottomRightRadius:2,
        borderBottomLeftRadius:2,
    },
    container:{
        alignSelf:'stretch' ,
        flex:1 ,
        backgroundColor:'white',
        padding:wp(2),
        justifyContent:'center'

    },
    box:{
        borderWidth:1,
        borderRadius:2,
        borderColor:"#00BABE",
        alignSelf:'stretch',
        marginVertical:5,
        shadowColor: '#000',
    shadowOffset : {width:0 , height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation:3 ,
    },
    button:{
        flexDirection:'row',
        padding:wp(2),
        alignItems:'center',
        justifyContent:'space-between',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2,
        borderTopRightRadius:2,
        borderTopLeftRadius:2,
        backgroundColor:"#00BABE"
    },
    title:{
         fontFamily:'IRANSansWeb_Medium',
         fontSize:wp(4),
         color: 'white',
         marginLeft:10,
         marginRight:10,
    },
    bottomiconstyle:{
         alignSelf:'flex-end'
    },
    icontextContainer:{
     alignSelf:'flex-start',
     flexDirection:'row',
    },
    container_fluid   : {
        backgroundColor: '#fff',
        margin:0,
        flex:1 , 
        flexDirection:'column' ,
        padding:20
    },
   
});
