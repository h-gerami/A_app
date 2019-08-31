import React , {Component} from 'react';
import {Text , View , FlatList , StyleSheet , TouchableOpacity , Image , Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp } from '../styles/CustomStyle';


class ControlPanel extends Component {  
  onclicknavbutton(dir) {
    if (dir === 'Home') {
      Actions.jump('Home2');
    } 
} 
    

  render () {
    return (
        <View style={styles.container}>
        <View style = {{padding: 20  ,flex:1,  backgroundColor: 'brown',}}>
        <FlatList
          data={[
            {key: 'صفحه اصلی' , icon: 'home' , direction: 'Home'},
          ]}
          renderItem={({item}) => 
            <TouchableOpacity style = {styles.container2} onPress = {() => this.onclicknavbutton(item.direction) }>
              <Icon style = {styles.iconstyle}  name={item.icon} size={20} color= {item.color === '1' ? "#e91e63" : "white"} />
              <Text style={styles.textitem}>{item.key}</Text>
          </TouchableOpacity>
        }
        />
        </View>
      </View>
    )
  }
}
export default ControlPanel;
const styles = StyleSheet.create({
  container2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height:wp(10),
    backgroundColor: 'brown',
    borderBottomWidth:0.5,
     borderColor:'white',
     marginTop:10
   }, 
    container: {
     flex: 1,
    },
    textitem: { 
      padding: 4,
      fontSize: 11,
      color:'white',
      fontFamily: 'IRANSansMobile_Medium',
    },
   
  })
