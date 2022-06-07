import * as React from 'react';
import {  View, Text, StyleSheet } from 'react-native';



function Account({navigation}) {
    return (
        <View style = {styles.container1}> 
        <Text>Account</Text>
        </View>
    
)};

const styles = StyleSheet.create({
 
    container1 : { 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    
    textstyle : {
      color : 'black'
    }
  
   
  });
  
  export default Account ;