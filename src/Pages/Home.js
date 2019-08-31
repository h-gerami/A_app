import React , {Component} from 'react';
import {View , Text , StyleSheet , SafeAreaView  , Image , ScrollView , FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ALLEY_API , ALLEY_ADDRESS}  from '../../src/components/Global/Global'
import {ALLEY_SPINNER , HomeBannerSlide , ContainerWithTitle , CatIconName , Comment_a} from '../components/Common';
import Carousel , {Pagination} from 'react-native-snap-carousel';
import { wp } from '../components/styles/CustomStyle';
import {Products} from '../components/Global/Statics'
import Product_a from '../components/Common/Product/Product_a'
const regex = /(<([^>]+)>)/ig;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading :1,
            loadingComment:1,
            comments:[],
            sliders : [],
            activeSlide: 0
        }
    }
    componentWillMount = () => {
        this.GetSlider();
        this.GetComments();
     }

     GetSlider = () => {
        fetch(ALLEY_API + 'slideshow/slides', {
            method: 'POST',
            headers: null,
            body: null,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(responseJson.status);
                this.setState({loading: 0 , sliders:responseJson.response})
            })
            .catch((error) => {
            console.error(error);
            });
     }
     GetComments = () => {
        fetch(ALLEY_API + 'product/2/comment', {
            method: 'POST',
            headers: null,
            body: null,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({loadingComment: 0 , comments:responseJson.response})
            })
            .catch((error) => {
            console.error(error);
            });
     }

     
    _renderSlide({item,index}){
        return (
          <HomeBannerSlide
          imageurl = {item.image}
          />
        )
    }

    _renderLastProduct = ({item}) => (
        <Product_a
                style = {styles.lastproductcompstyle}
                ProductImage = {item.ProductImage}
                productname = {item.productname}
                productoldprice = {item.productoldprice}
                productNewprice = {item.productNewprice}
                discount = {item.discount}
                onImageClick = {() => alert(2)}
            />
      );
      _renderComment = ({item}) => (
          
        <Comment_a
            author_name = {item.author_name}
            sent_date = {item.sent_date}
            // body = {item.body.replace(regex, '').substring(0, 30) + (item.body.length > 30 ? '...' : '')}
            // body = {item.body.replace(/<p>/g, '').replace(/)}
            body = {item.body}
            rating = {item.rating}
        />
      );
     
    render() {
        return(
            <ScrollView >
            {this.state.loading === 1 ? <ALLEY_SPINNER/> : 
            <SafeAreaView style={styles.sliderContainer}>
                <View style = {styles.sliderContainerchild}>
                    <Carousel
                    // autoplay={true}
                    enableMomentum
                    // autoplayDelay={500}
                    ref={ref => this.carousel = ref}
                    data={this.state.sliders.slides}
                    sliderWidth={wp(100)}
                    
                    itemWidth={wp(100)}
                    renderItem={this._renderSlide}
                    onSnapToItem = { index => this.setState({activeSlide:index}) }
                    />
                     <Pagination
                        dotsLength={this.state.sliders.count}
                        activeDotIndex={this.state.activeSlide}
                        containerStyle={{ position: 'absolute' , top: -20 }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 2,
                            backgroundColor: 'brown'
                        }}
                        inactiveDotStyle={{
                            backgroundColor: 'red'
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        />
                </View>
        </SafeAreaView>}
            <ContainerWithTitle
                Title = "دسته بندی ها"
            >
                <View style = {{flexDirection:'row' , alignSelf:'stretch'  , justifyContent:'space-around' , alignItems:'center' }}>
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/childandyoung.png')}
                        Name = "کودک و نوجوان"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/homeandkitchen.png')}
                        Name = "خانه و آشپزخانه"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/protein.png')}
                        Name = "پروتئین"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/supermarket.png')}
                        Name = "سوپرمارکت"
                        onClickCat = {() => alert(2)}
                    />
                </View>
                <View style = {{flexDirection:'row' , alignSelf:'stretch'  , justifyContent:'space-around' , alignItems:'center' }}>
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/childandyoung.png')}
                        Name = "کودک و نوجوان"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/homeandkitchen.png')}
                        Name = "خانه و آشپزخانه"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/protein.png')}
                        Name = "پروتئین"
                        onClickCat = {() => alert(2)}
                    />
                    <CatIconName
                        icon = {require('../../assets/images/senfIcon/supermarket.png')}
                        Name = "سوپرمارکت"
                        onClickCat = {() => alert(2)}
                    />
                </View>
            </ContainerWithTitle>
            <ContainerWithTitle
                Title = "محصولات جدید"
                ButtonTitle = "همه"
                onButtonClick = {() => alert(3)}
            >
            
            <FlatList
            style = {styles.margintop3}
                horizontal
                data={Products}
                keyExtractor={(item) => item.id}
                renderItem={this._renderLastProduct}
            />
            </ContainerWithTitle>
            <ContainerWithTitle
                Title = "آخرین محصولات"
                ButtonTitle = "همه"
                onButtonClick = {() => alert(3)}
            >
            
            <FlatList
            style = {styles.margintop3}
                horizontal
                data={Products}
                keyExtractor={(item) => item.id}
                renderItem={this._renderLastProduct}
            />
            </ContainerWithTitle>
            <ContainerWithTitle
            
                Title = "نظرات کاربران"
            >
                {this.state.loadingComment === 1 ? <ALLEY_SPINNER/> : <FlatList
                    style = {styles.margintop3}
                    data={this.state.comments.comments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this._renderComment}
                />}
            </ContainerWithTitle>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    margintop3:{
        marginTop:wp(3)
    },
    lastproductcompstyle:{
        marginHorizontal : wp(1) ,
        marginBottom:wp(2)
    },
    sliderContainer:{
        marginVertical:wp(3),
        
    },
    sliderContainerchild:{
        justifyContent:'center' , alignItems:'center'
    },
    text : {
        fontFamily: 'IRANSansMobile_Bold'
    }
})
// IRANSansMobile_Light
// IRANSansMobile_Bold
// IRANSansMobile_Medium