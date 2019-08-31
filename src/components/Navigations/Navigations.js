import React , {Component} from 'react';
import { Scene , Router, Actions , Stack ,Drawer } from 'react-native-router-flux';
import Home from '../../Pages/Home';
import ControlPanel from '../Navigations/ControlPanel';
import {StyleSheet , TouchableOpacity , View , Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp } from '../styles/CustomStyle';

class Navigation extends Component {
    

    LeftbuttonRendere = () => {
        return(
            <View style = {styles.leftbutton}>
                <TouchableOpacity  onPress = {() => Actions.drawerOpen()}>
                    <Icon size = {wp(8)} name = "menu" color = "#fffef8" />
                </TouchableOpacity>
                <TouchableOpacity style = {{marginLeft:wp(1)}}>
                    <Icon size = {wp(7)} name = "magnify" color = "#fffef8" />
                </TouchableOpacity>
            </View>
        );
    }

    RightButtonRendere = () => {
        return(
            <TouchableOpacity style = {{marginRight:wp(2)}}>
                <Icon size = {wp(7)} name = "cart" color = "#fffef8" />
            </TouchableOpacity>
        );
    }

    render () {
        return (
            <Router>
               <Scene key = "root" hideNavBar initial>
               <Scene key =  "Main" renderTitle = {<Text style = {styles.navigationBarTitleStyle}>سرکوچه</Text>}  renderRightButton = {() => this.RightButtonRendere()} renderLeftButton = {() => this.LeftbuttonRendere} tintColor = "#ccc"  navigationBarStyle = {styles.navbarstyle}  >
                     <Drawer
                        hideNavBar
                        key="drawerMenu"
                        contentComponent={ControlPanel}
                        drawerWidth={wp(70)}
                        drawerPosition="right"
                        drawerImage={{ uri: null }}
                    >
                    <Scene key = "Home" component = {Home} />
                    </Drawer>
                </Scene>
                </Scene>
            </Router>
        );
    }
}

export default Navigation ;
const styles = StyleSheet.create({
    navbarstyle :{
        backgroundColor:'#9e0b0f'
    },
    navigationBarTitleStyle: {
       flex: 1,
       textAlign: 'center',
       color:'white',
       fontSize:wp(4),
       fontFamily:'IRANSansMobile_Bold'
    },
    leftbutton:{
        flexDirection:'row' ,
        justifyContent:'center' ,
        alignItems:'center' ,
        marginLeft:wp(2)
    }
})
// IRANSansMobile_Light
// IRANSansMobile_Bold
// IRANSansMobile_Medium