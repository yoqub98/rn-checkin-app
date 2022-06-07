import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Button, Icon, Div, Text } from "react-native-magnus";
import { useState, setState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';

export default function Attendance({navigation}) {


    
    return (
        <View style = {styles.container1}> 
         <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 20, paddingBottom: 10}}
      calendarColor={'#5A0BDB'}
      calendarHeaderStyle={{color: 'white'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
    />
      
        </View>
    
)};

const styles = StyleSheet.create({
 
    container1 : { 
      flex: 1,
    color : "white",
      
    },
    
    textstyle : {
      color : 'black'
    }
  
   
  });
