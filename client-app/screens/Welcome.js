import React,{Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
 
class Welcome extends Component {

     listPage=()=>{
         this.props.navigation.navigate('reserveList')
     }
     reservePage=()=>{
         this.props.navigation.navigate('addReserve')
     }
        

  render() {
       
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:20}}>
              Welcome To Reservation
          </Text>
          <Button style={{marginBottom:20,padding:10,height:50}}title='Reservation List' onPress={this.listPage} />
          <Button style={{marginBottom:20,padding:10,height:50}}title='Reserve' onPress={this.reservePage} />
          
      </View>
    );
  }
}

 
export default Welcome