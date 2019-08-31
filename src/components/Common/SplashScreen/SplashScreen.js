import React , {Component} from 'react';
import {View , Text , StyleSheet , ActivityIndicator , Image} from 'react-native';
import {connect} from 'react-redux';
import {isloadingupdate} from '../../../Actions/IsLoadingAtions';
import {CardSection , Spinner} from '../';
import { wp, hp } from '../../styles/CustomStyle';

class SplashScreen extends Component {

    componentWillMount() {
        setTimeout(
            () => { this.props.isloadingupdate(false) },
            500
          )
    }

    render() {
      return (
        <View style = {styles.container}>
          <CardSection style = {{backgroundColor: '#fff0' , borderBottomWidth: 0}}>
            <Image
                style={styles.imagelogo}
                source={require('../../../../assets/images/aloostadabout.png')}
                />
        </CardSection>
        <Text style = {styles.welcometext}>به الواستاد خوش آمدید</Text>
        <Spinner/>
        </View>
      );
    }
  }
  const mapStateToProps = state => {
    return {
        isloading: state.isloading
    }
   };
    // export default SplashScreen;
  export default connect(mapStateToProps , {isloadingupdate})(SplashScreen);
  const styles = StyleSheet.create ({
    imagelogo:{
      width:wp(50),
      height:hp(30),
      resizeMode:'contain'
  },
    container : {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 70
  },
         welcometext: {
          color: '#2B328C',
          fontFamily: 'IRANSansWeb_Medium',
          fontSize:15,
          marginTop:15,
          marginBottom:40
      },
      textStyles : {
        color: 'white',
        fontSize: 30,
        
        fontFamily: 'IRANSansWeb_Medium'
        
      }
  })