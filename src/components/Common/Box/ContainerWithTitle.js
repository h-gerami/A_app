import React from 'react';
import {View , Text , StyleSheet , TouchableOpacity} from 'react-native';
import { wp } from '../../styles/CustomStyle';

const ContainerWithTitle = (props) => {
    return(
        <View style = {[styles.container , props.style]}>
            <View style = {styles.titleandbuttonwrapper}>
                <Text style = {styles.titlestyle}>{props.Title}</Text>
                {props.ButtonTitle ? <TouchableOpacity style = {styles.buttonstyle} onPress = {props.onButtonClick}>
                    <Text style = {styles.buttonTextStyle}>{props.ButtonTitle}</Text>
                </TouchableOpacity> : null}
            </View>
            <View style = {[styles.childcontainer , props.containerStyle]}>
                {props.children}
            </View>
        </View>
    );
}
export {ContainerWithTitle};
const styles = StyleSheet.create({
    childcontainer:{
        alignSelf:'stretch' ,
        flex:1 ,
        backgroundColor:'white',
        padding:wp(2),
        justifyContent:'center',
        // alignItems:'flex-start'

    },
    container:{
        paddingBottom:wp(10),
        backgroundColor:'white',
        paddingVertical:wp(2),
        marginBottom:wp(3),
        justifyContent:'center',
        alignItems:'center',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
        height: 0,
        width: 0
        },
        elevation: 2,
    },
    titleandbuttonwrapper:{
        flexDirection:'row',
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titlestyle: {
        fontFamily:'IRANSansMobile_Medium',
        borderWidth:1,
        borderColor:'#c8c8c8',
        paddingVertical:wp(2),
        paddingHorizontal:wp(5),
        borderRadius:3,
        borderRightWidth:0,
        fontSize:wp(3),
        color: '#939393'
    },
    buttonstyle :{
        marginHorizontal:wp(5)
    },
    buttonTextStyle:{
        fontFamily:'IRANSansMobile_Medium',
        color:'#424242'
    }
})
