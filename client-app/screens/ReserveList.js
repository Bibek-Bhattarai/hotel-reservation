import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {graphql} from 'react-apollo'
import {getReservationsQuery} from '../queries/queries'


class ReserveList extends Component {

    displayReservations(){
    var data=this.props.data
    if(data.loading){
        return(
            <Text>Loading reservations..</Text>
            
        )
    }
        else{
            return data.reservations.map(reservation=>{
                return(
                    <View key={reservation.id}>
                    <Text>Name:{reservation.name}</Text>
                    <Text>Hotel Name:{reservation.hotelName}</Text>
                    <Text>Arrival Date:{reservation.arrivalDate}</Text>
                    <Text>Departure Date:{reservation.departureDate}</Text>
                    <Text></Text>
                    </View>
                    
                )
            })
            }
        }

  render() {
    return (
        <View>
        <Text style={{fontSize:32}}>List of Reservations </Text>
      <ScrollView>
         {this.displayReservations()}
      </ScrollView>
      </View>
    );
  }
}

 
export default graphql(getReservationsQuery)(ReserveList)