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
    <Div column bg='red'>
    <Div h={50} alignItems="center" justifyContent='left' bg = "purple100"  row >
      <Text ml={10} mr={44} fontSize={16}  fontWeight = "bold">Checked in </Text>
      <Text mr={66} fontSize={16}  fontWeight = "bold">Checked out</Text>
      <Text fontSize={16}  fontWeight = "bold">Total</Text>
    </Div>
    <Div h={50} alignItems="left" pt={15} justifyContent='left' bg = "white" row >
      <Text ml={10} fontSize={15} mr={100} fontWeight = "normal">19:04</Text>
      <Text  fontSize={15} mr={120} fontWeight = "normal">06:45</Text>
      <Text  fontSize={15}   fontWeight = "normal">8h 15m</Text>
    </Div>
    </Div>
    <Div row pt={50} flex={1} justifyContent='center' alignContent="center" alignItems="center" >
    <Button
    mt="lg"
    rounded={15}
    px="xl"
    py="lg"
    bg='gray200'
    borderWidth={2}
    borderColor="purple800"
    color="purple800"
    underlayColor="grey200"
     fontWeight='600'
  >Request Time Update</Button>
  </Div>
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
