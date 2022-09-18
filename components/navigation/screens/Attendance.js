import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Button, Icon, Div, Text } from "react-native-magnus";
import { useState, setState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import Fetch from '../../Fetch';

export default function Attendance({navigation}) {


    
    return (
        <View style = {styles.container1}> 
         

    <Fetch></Fetch>
  

        </View>
    
)};

const styles = StyleSheet.create({
 
    container1 : { 
      flex: 1,
    color : "white",
    alignContent : 'center',
  
      
    },
    container2 : {
      justifyContent : "center",
      alignItems : 'center',
    },
    
    textstyle : {
      color : 'black'
    }
  
   
  });
