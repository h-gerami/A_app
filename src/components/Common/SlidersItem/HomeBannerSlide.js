import React from 'react';
import { Image , StyleSheet } from 'react-native';
import {ALLEY_ADDRESS} from '../../Global/Global'
import { wp } from '../../styles/CustomStyle';
const HomeBannerSlide = (props) => {
    return(
        <Image style = {styles.imagestyle} source = {{uri : ALLEY_ADDRESS + props.imageurl}}></Image>
    );
}
export {HomeBannerSlide};
const styles = StyleSheet.create({
    imagestyle : {
        width:'100%' ,
        height :wp(40) ,
        resizeMode:'cover'
    }
})
