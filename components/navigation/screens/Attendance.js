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
    <Div column >
    <Div h={50} alignItems="center" justifyContent='center' bg = "purple100"  row >
      <Text  pr="3xl" fontSize={16}  fontWeight = "bold">Checked in </Text>
      <Text  pr="3xl" fontSize={16}  fontWeight = "bold">Checked out</Text>
      <Text  pr="3xl" fontSize={16}  fontWeight = "bold">Total</Text>
    </Div>
    <Div h={50} alignItems="center" justifyContent='center' bg = "white" row >
      <Text  fontSize={15} fontWeight = "normal">19:04</Text>
      <Text  fontSize={15}  fontWeight = "normal">06:45</Text>
      <Text  fontSize={15}  fontWeight = "normal">8h 15m</Text>
    </Div>
    </Div>
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
