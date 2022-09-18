import * as React from 'react';
import {  View, Div, Text, StyleSheet } from 'react-native';
import Fetch from '../../Fetch';



function Account({navigation}) {
    return (
        <View style = {styles.container1}> 
        <View style = {styles.containerTop}>
      <Text>Account page here</Text>
      
       </View>
        </View>
    
)};

const styles = StyleSheet.create({
 
    container1 : { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    },
   containerTop : {




borderWidth : 1 ,
   },

    textstyle : {
      color : 'black'
    }
  
   
  });
  
  export default Account ;