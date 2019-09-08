import React from 'react';
import RN , {View , Text , StyleSheet , Image} from 'react-native';
import StarRating from 'react-native-star-rating';
import { wp } from '../../styles/CustomStyle';
import PersianText from '../../Common/PersianText/PersianText'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Comment_a = (props) => {
    return(
        <View style = {styles.container}  key={props.key2}>
            <View style = {[styles.rightpart , {flex:1}]}>
                <View style = {[styles.imagewrapper ,  {flex:2}]}>
                    {/* <Image style = {styles.image} source = {require('../../../../assets/images/sample/hossein.jpeg')} /> */}
                    <Text style = {styles.auternamestyle}>{props.author_name}</Text>
                    <View style = {{flexDirection:'row'}}>
                    <Icon name = "clock-outline" size = {wp(4)}/>
                        <Text style = {styles.sent_date}><PersianText>{props.sent_date}</PersianText></Text>
                    </View>
                    
                </View>
                <View style = {[styles.infowrapper , {flex:5}]}>
                
                <Text style = {styles.product_name}><PersianText>{props.product_name.substring(0, 30) + (props.product_name.length > 30 ? '...' : '')}</PersianText></Text>
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
                     <Text style = {styles.sent_date}><PersianText>{props.body}</PersianText></Text>
                </View>
            </View>
            <View style = {styles.starwrapper}>
            
            </View>
        </View>
    );
}
export {Comment_a};
const styles = StyleSheet.create ({
    auternamestyle:{
        color:'#202020',
        fontSize:wp(3.5),
        fontFamily:'IRANSansMobile_Bold',
    },
    sent_date:{
        color:'#939393',
        fontSize:wp(3),
        fontFamily:'IRANSansMobile_Medium',
    },
    product_name:{
        color:'#999993',
        fontSize:wp(3.5),
        fontFamily:'IRANSansMobile_Bold',
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
        // alignSelf:'stretch',
        // justifyContent:'space-between',
        flex:1,
        alignItems:'center',
        marginBottom:wp(4),
        position:'relative'
    },
    imagewrapper:{
        alignSelf:'flex-start',
        alignItems:'flex-start'
    },
    infowrapper:{
        marginLeft:wp(2),
        alignSelf:'stretch',
        textAlign:'right',
        alignItems:'flex-start'
    },
    starwrapper:{
        flexDirection:'row' ,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-start',
        
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'contain',
        borderRadius:200,
        
    }
})