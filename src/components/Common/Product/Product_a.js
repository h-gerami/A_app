import React , {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View , Text ,Image , TouchableOpacity , StyleSheet} from 'react-native';
import PersianText from '../PersianText/PersianText'
import { wp } from '../../styles/CustomStyle';
const latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];
class Product_a extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 1 ,
        }
    }
        onIncreaseNumberClick = () => {
            this.setState({number: this.state.number + 1})
        }

     onDecreaseNumberClick = () => {
        if (this.state.number == 1) {
        } else {
            this.setState({number: this.state.number - 1})
        }
     }
     ChangeToPersion = (number) => {
        number = number.toString();
        for (let i = 0; i < 10; i++) {
            number = number.replace(latinNumbers[i], latinToPersianMap[i]);
            if(i == 9) {
                return number;
            }
        }
        
     }
    render() {
        return(
            <View style = {[styles.container , this.props.style]}>
                {this.props.discount ? <View style = {styles.discount}>
                    <Text style = {styles.discounttext}><PersianText>{this.props.discount}</PersianText></Text>
                </View> : null}
                <TouchableOpacity style = {styles.imageshwrapper} onPress = {this.props.onImageClick}>
                    <Image style = {styles.imagesh} source = {this.props.ProductImage} />
                </TouchableOpacity>
                <View style = {styles.nameandpricewrapper}>
                    <Text style = {styles.itemName}>{this.props.productname}</Text>
                    <Text style = {styles.itemnewPrice}><PersianText>{this.props.productNewprice}</PersianText></Text>
                    {this.props.productoldprice ? <Text style = {styles.itemoldPrice}><PersianText>{this.props.productoldprice}</PersianText></Text> : null}
                </View>
                <View style = {styles.minandplusWrapper}>
                        <TouchableOpacity activeOpacity = {0.8} style = {styles.Motherpluswrapper} onPress = {() =>  this.onIncreaseNumberClick()}>
                            <View style = {styles.pluswrapper} >
                                <Icon color = 'white' size = {wp(4)} name = 'plus'/>
                            </View>
                        </TouchableOpacity>
                        <View style = {styles.numberwrapper}>
                            <Text style = {styles.numberstyle}>{this.ChangeToPersion(this.state.number)}</Text>
                        </View>
                        <TouchableOpacity activeOpacity = {0.8} style = {styles.Motherminuswrapper} onPress = {() =>  this.onDecreaseNumberClick()}>
                            <View style = {styles.minuswrapper}>
                                <Icon color = 'white' size = {wp(4)} name = 'minus'/>
                            </View>
                        </TouchableOpacity>
                </View>
                <View style = {styles.twofunction}>
                    <TouchableOpacity  style = {{flexDirection:'row' ,position:'absolute' , left:wp(0)}}>
                        <View style = {styles.twofunctionIconwrapper}>
                            <Image style = {styles.iconimage} source = {require('../../../../assets/images/icon/cart.png')} />
                        </View>
                        <View style = {styles.addtocartwrapper}></View>
                    </TouchableOpacity>
                    <TouchableOpacity  style = {{flexDirection:'row' ,position:'absolute' , right:wp(0)}}>
                        <View style = {styles.addtocartwrapper2}></View>
                        <View style = {styles.twofunctionIconwrapper2}>
                        <Image style = {styles.iconimage} source = {require('../../../../assets/images/icon/shoppingpattern.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Product_a;
const styles = StyleSheet.create({
    iconimage:{
        width:wp(6) ,
        resizeMode:'contain'
    },
    twofunctionIconwrapper:{
        height:wp(10),
        width : wp(12.5),
        backgroundColor:'#5cb85c',
        justifyContent:'center',
        alignItems:'center',
        borderBottomLeftRadius:wp(2),
        
    },
    twofunctionIconwrapper2:{
        height:wp(10),
        width : wp(12.5),
        backgroundColor:'#065706',
        justifyContent:'center',
        alignItems:'center',
        borderBottomRightRadius:wp(2),
        
    },
    addtocartwrapper:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: wp(10),
        borderBottomWidth: wp(10),
        borderRightColor: 'transparent',
        borderBottomColor: '#5cb85c',
        
    },
    addtocartwrapper2:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: wp(10),
        borderTopWidth: wp(10),
        borderLeftColor: 'transparent',
        borderTopColor: '#065706',
    },
    twofunction:{
        position:'relative',
        height:wp(10),
        alignSelf:'stretch',
        borderBottomLeftRadius:wp(2),
        borderBottomRightRadius:wp(2),
        marginHorizontal:-wp(6),
        flexDirection:'row',
    },
    discount:{
        backgroundColor:'#db2b39',
        position:'absolute',
        top:0,
        right:0,
        justifyContent:"center",
        alignItems:'center',
        width:wp(8),
        height:wp(8),
        borderTopRightRadius:wp(2),
        borderBottomLeftRadius:wp(2)
    },
    discounttext:{
        color:'white',
        fontSize:wp(2.5),
        fontFamily:'IRANSansMobile_Medium',
    },
    minandplusWrapper:{
        flexDirection   :'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:wp(3),
        width:wp(22)
    },
    numberwrapper:{
        height:wp(8),
        justifyContent:'center',
        alignItems:'center',
        width:wp(17),
        borderWidth:0.5,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderColor:'#ccc',
        backgroundColor:'white',
        // marginHorizontal:-wp(5),
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
        height: 0,
        width: 0
        },
        position:'relative',
        zIndex:1
    },
    Motherminuswrapper :{
        justifyContent:'center',
        alignItems:'center',
        width:wp(10),
        height:wp(10),
        backgroundColor:'transparent',
        right:wp(5),
        zIndex:9,
        position:'relative',
    },
    minuswrapper:{
        justifyContent:'center',
        alignItems:'center',
        width:wp(8),
        height:wp(8),
        borderRadius:100,
        backgroundColor:'#db2b39',
        zIndex:9,
        position:'relative',
        elevation: 2,
    },
    Motherpluswrapper :{
        justifyContent:'center',
        alignItems:'center',
        width:wp(10),
        height:wp(10),
        backgroundColor:'transparent',
        position:'relative',
        left:wp(5),
        zIndex:9,
        position:'relative',
    },
    pluswrapper:{
       
        justifyContent:'center',
        alignItems:'center',
        width:wp(8),
        height:wp(8),
        borderRadius:100,
        backgroundColor:'#5cb85c',
        elevation: 2,
        zIndex:9,
        position:'relative',
    },
    container:{
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
        height: 0,
        width: 0
        },
        elevation: 2,
        backgroundColor:'white',
        borderRadius:wp(2),
        borderWidth:0.5,
        borderColor:'#fdfdfd',
        justifyContent:'center',
        alignItems:'center',
        padding:wp(6),
        paddingBottom:0,
    },
    imageshwrapper:{
        width:wp(18),
        height:wp(26)
    },
    imagesh:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
    nameandpricewrapper:{
        flexDirection:'row' ,
        justifyContent:'space-around',
        alignSelf:'stretch',
        marginHorizontal:-wp(5),
        marginTop:wp(4),
        marginBottom:wp(2),
        position:'relative'
    },
    numberstyle:{
        fontFamily:'IRANSansMobile_Medium',
        color : "#202020",
        fontSize:wp(3)
    },
    itemnewPrice: {
        fontFamily:'IRANSansMobile_Medium',
        color : "#202020",
        fontSize:wp(3)
    },
    itemoldPrice: {
        fontFamily:'IRANSansMobile_Medium',
        color : "#4c4c4c",
        fontSize:wp(2),
        position:'absolute',
        right:wp(10),
        top:-wp(4),
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    
    itemName : {
        color : "#939393",
        fontSize:wp(3),
        fontFamily:'IRANSansMobile_Medium'
    }
})