import React from 'react';
import RN , {View , Text , StyleSheet , Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import { wp } from '../../styles/CustomStyle';
import PersianText from '../../Common/PersianText/PersianText'

function mapStringToComponent(stringToRender) {
    const parseResult = stringToRender.match(/<([a-z]*)>(.*)<\/[a-z]*>/i);

    if (parseResult !== null) {
      const [, compName, innerText] = parseResult;

      return React.createElement(
        RN[compName],
        null, // here may be an object with attributes if your node has any
        innerText,
      );
    }

    return null;
}
const Comment_a = (props) => {
    const component = mapStringToComponent(props.body);
    return(
        <View style = {styles.container}>
            <View style = {styles.rightpart}>
                <View style = {styles.imagewrapper}>
                    <Image style = {styles.image} source = {require('../../../../assets/images/sample/hossein.jpeg')} />
                </View>
                <View style = {styles.infowrapper}>
                    <Text style = {styles.auternamestyle}>{props.author_name}</Text>
                    <Text style = {styles.sent_date}><PersianText>{props.sent_date}</PersianText></Text>
                    <Text style = {styles.sent_date}>{props.body}</Text>
                </View>
            </View>
            <View style = {styles.starwrapper}>
            <StarRating
                        emptyStarColor = "#ccc"
                        disabled={true}
                        maxStars={5}
                        rating={props.rating}
                        emptyStar={'star-outline'}
                        fullStar={require('../../../../assets/images/icon/star.png')}
                        iconSet={'MaterialCommunityIcons'}
                        starSize = {wp(5)}
                        
                    />
            </View>
        </View>
    );
}
export {Comment_a};
const styles = StyleSheet.create ({
    auternamestyle:{
        color:'#202020',
        fontSize:wp(3),
        fontFamily:'IRANSansMobile_Bold',
    },
    sent_date:{
        color:'#939393',
        fontSize:wp(3),
        fontFamily:'IRANSansMobile_Medium',
    },
    body:{
        color:'#939393',
        fontSize:wp(3),
        fontFamily:'IRANSansMobile_Medium',

    },
    rightpart:{
        flexDirection:'row' ,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start'
    },
    container:{
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:wp(3),
        position:'relative'
    },
    imagewrapper:{
        alignSelf:'flex-start',
        borderRadius:200,
        borderWidth:1,
        borderColor:'#a8a8a8',
        width:wp(20),
        height:wp(20),
    },
    infowrapper:{
        alignSelf:'flex-start',
        marginLeft:wp(2),
        justifyContent:'center',
    },
    starwrapper:{
        flexDirection:'row' ,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
        position:'absolute',
        top:0,
        right:wp(5)
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        borderRadius:200,
        
    }
})