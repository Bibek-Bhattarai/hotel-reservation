import React from 'react';
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import {createStackNavigator} from 'react-navigation'
import {Welcome,AddReserve,ReserveList} from './screens'

//apollo-client setup
const client =new ApolloClient({
  uri:'http://localhost:5000/graphql'
})
const IntroStack=createStackNavigator({
  welcome:Welcome,
  addReserve:AddReserve,
  reserveList:ReserveList
})

export default class App extends React.Component {  
  render() {
    return (
      <ApolloProvider client={client}>

     <IntroStack />

      </ApolloProvider>
      
    );
  }
   
}

 
