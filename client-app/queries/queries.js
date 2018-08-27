import {gql} from 'apollo-boost'

const getReservationsQuery=gql`
{
    reservations{
        id
        name
        hotelName
        arrivalDate
        departureDate
    }
}`
const addReserveMutation=gql`
mutation($name:String!,$hotelName:String!,$arrivalDate:String!,$departureDate:String!,){
    addReservation(name:$name,hotelName:$hotelName,arrivalDate:$arrivalDate,departureDate:$departureDate){
        name
        hotelName
        arrivalDate
        departureDate
    }

}`

export {getReservationsQuery,addReserveMutation}