import React,{Component} from 'react';
import {Text,View,Button,TextInput,StyleSheet} from 'react-native'
import {graphql} from 'react-apollo'
import {addReserveMutation,getReservationsQuery} from '../queries/queries'

class AddReserve extends Component{
    state={
        name:'',
        hotelName:'',
        arrivalDate:'',
        departureDate:''
    }
    updateName=(text)=>{
        this.setState({
            name:text
        })
    }
    updateHotel=(text)=>{
        this.setState({
            hotelName:text
        })
    }
    updateArrival=(text)=>{
        this.setState({
            arrivalDate:text
        })
    }
    updateDeparture=(text)=>{
        this.setState({
            departureDate:text
        })
    }
    reserve=()=>{
        //alert(this.state.hotelName)
        this.props.addReservation({
            variables:{
                name:this.state.name,
                hotelName:this.state.hotelName,
                arrivalDate:this.state.arrivalDate,
                departureDate:this.state.departureDate
            }
        })
        refetchQueries:[{query:getReservationsQuery}]
        this.setState({
            name:'',
            hotelName:'',
            arrivalDate:'',
            departureDate:''

        })
    }

    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20}}>Enter your Information</Text>
                <TextInput 
                value={this.state.name}
                placeholder='Name'
                onChangeText={text=>this.updateName(text)}
                />
                <TextInput 
                value={this.state.hotelName}
                placeholder='Hotel Name'
                onChangeText={text=>this.updateHotel(text)}
                />
                <TextInput 
                value={this.state.arrivalDate}
                placeholder='Arrival Date'
                onChangeText={text=>this.updateArrival(text)}
                />
                <TextInput 
                value={this.state.departureDate}
                placeholder='Departure Date'
                onChangeText={text=>this.updateDeparture(text)}
                />
                <Button title='RESERVE' onPress={this.reserve} />

            </View>
        )
    }

}
export default graphql(addReserveMutation,{name:'addReservation'})(AddReserve)