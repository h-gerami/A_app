import React , {Component} from 'react';
import {View , Text , StyleSheet , SafeAreaView   , Image , ScrollView , FlatList , ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ALLEY_API , ALLEY_ADDRESS}  from '../../src/components/Global/Global'
import {ALLEY_SPINNER , HomeBannerSlide , ContainerWithTitle , CatIconName , Comment_a , Spinner} from '../components/Common';
import Carousel , {Pagination} from 'react-native-snap-carousel';
import { wp, hp } from '../components/styles/CustomStyle';
import {Products} from '../components/Global/Statics'
import Product_a from '../components/Common/Product/Product_a'
const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };
class Home extends Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            commentsLoading:false,
            loading :1,
            loadingComment:1,
            comments:[],
            sliders : [],
            activeSlide: 0,
            commentsnumber:0
        }
    }
    componentWillMount(){
        this.GetHomeSlide_Comments();
     }

     GetHomeSlide_Comments = () => {
        const bodyObj = {
            comment_limit: 10,
            comment_offset: 1
          }
        fetch(ALLEY_API + 'home/get_home', {
            method: 'POST',
            headers: null,
            body:JSON.stringify(bodyObj)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({loading: 0 , sliders:responseJson.response.slides ,
                    loadingComment: 0 , comments:responseJson.response.comments.comment_content,
                    commentsnumber: responseJson.response.comments.count})
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
            product_name = {item.product_name}
            rating = {item.rating}
        />
      );
      renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        // if (this.state.commentsnumber === 0 ) return null;
         if (!(!this.state.commentsLoading &&  (!(this.state.commentsnumber < 10)))) return null;
         return (
            <Spinner/>
         );
       };
       Get_Comments = (page) => {
        this.setState({ commentsLoading: true})
        let Obj = {
            limit: 10,
            offset: page
          }
        fetch(ALLEY_API + 'home/product_comment', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(Obj)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                let listData = this.state.comments;
                let data = listData.concat(responseJson.response.comments)  //concate list with response
                this.setState({ commentsLoading: false, comments: data , commentsnumber: responseJson.response.count })
            })
            .catch((error) => {
            console.error(error);
            });
     }
       handleLoadMore = () => {
           
        if (!this.state.commentsLoading &&  (!(this.state.commentsnumber < 10))  ) {
            this.page = this.page + 1; // increase page by 1
            this.setState({page : this.state.page + 1} , function() {
                this.Get_Comments(this.page);
            })
          }
      };
     
    render() {
        return(
            <View>
                 <ScrollView
    onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        this.handleLoadMore()
      }
    }}
    scrollEventThrottle={400}
  >
            {this.state.loading === 1 ? <ALLEY_SPINNER/> : 
            <SafeAreaView style={styles.sliderContainer}>
                <View style = {styles.sliderContainerchild}>
                    <Carousel
                    // autoplay={true}
                    enableMomentum
                    // autoplayDelay={500}
                    ref={ref => this.carousel = ref}
                    data={this.state.sliders.slide_content}
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
            <View style = {{flex:1}}>
            <FlatList
            style = {styles.margintop3}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Products}
                keyExtractor={(item) => item.id}
                renderItem={this._renderLastProduct}
            />
            </View>
            </ContainerWithTitle>
            <ContainerWithTitle
                Title = "آخرین محصولات"
                ButtonTitle = "همه"
                onButtonClick = {() => alert(3)}
            >
            
            <FlatList
            style = {styles.margintop3}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Products}
                keyExtractor={(item) => item.id}
                renderItem={this._renderLastProduct}
            />
            </ContainerWithTitle>
            <ContainerWithTitle
            
                Title = "نظرات کاربران"
            >
            
                {this.state.loadingComment === 1 ? <ALLEY_SPINNER/> : 
                 
                        <FlatList
                        scrollEnabled = {false}
                    style = {[styles.margintop3]}
                    data={this.state.comments}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={this._renderComment}
                    ListFooterComponent={this.renderFooter.bind(this)}
                    // onEndReachedThreshold={0.4}
                    // onEndReached={this.handleLoadMore.bind(this)}
                />
                    
               }
            
            </ContainerWithTitle>
            </ScrollView>
            </View>
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
        marginVertical:wp(0.5),
        
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