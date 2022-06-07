import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Button, Icon, Div, Text } from "react-native-magnus";
import { useState } from 'react';

export default function Attendance({navigation}) {
    return (
        <View style = {styles.container1}> 
        <Text>Attendance</Text>
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
