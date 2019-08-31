import React from 'react';
import {View , Text , StyleSheet , Image , TouchableOpacity} from 'react-native';
import { wp } from '../../styles/CustomStyle';
const CatIconName = (props) => {
    return(
        <TouchableOpacity style = {styles.container} onPress = {props.onClickCat}>
                <Image style = {styles.image} source = {props.icon} />
                <Text style = {styles.name}>{props.Name}</Text>
            </TouchableOpacity>
    );
}
export {CatIconName};
const styles = StyleSheet.create({
    container:{
        flexDirection:'column' ,
        justifyContent:'center' ,
        alignItems: 'center',
        alignSelf:'stretch'
    },
    name: {
        fontFamily:'IRANSansMobile_Medium',
        fontSize:wp(3),
        
    },
    image :{
        width:wp(14),
        resizeMode:'contain'
    },
    
})
