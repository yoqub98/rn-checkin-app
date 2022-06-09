import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon, Div, Text } from "react-native-magnus";
import { useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer' ;
import { useCountdown } from 'react-native-countdown-circle-timer'


export default function HomeScreen({ navigation }) {
  const [message, setMessage] = useState('You are checked out');
  const [date, setDate] = useState(null);
  const [checkinTime, setcheckinTime] = useState('00:00');
  const [checkouTime, setcheckoutTime] = useState('00:00');
  const [btnTitle, setTitle] = useState('Check in');
  const [isPressed, setPress] = useState(false);
  const [liveDate, setLiveDate] = React.useState();
  const [liveTime, setLiveTime] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false); // start circle animation
  const [key, setKey] = useState(0);  // restart animation
  const [remainingTime, setRemain] = useState("00:00");
  
React.useEffect(() => {
    const livedate = setInterval(() => {
     
      let options = { weekday: 'long', literal : ",",  month: 'long', day: 'numeric' };

      setLiveDate(new Date().toLocaleString('en-UK', options));
    }, 1000);
    return () => {
      clearInterval(livedate);
    };
  }, []); // show current time live 
//////
  
React.useEffect(() => {
  const livetime = setInterval(() => {
   
    let options2 = {   hour: 'numeric',
    minute: 'numeric',
    second: 'numeric', };

    setLiveTime(new Date().toLocaleString('en-UK', options2));
  }, 1000);
  return () => {
    clearInterval(livetime);
  };
}, []); // show current time live 





  const getCurrentTime = () => {
    let today = new Date();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    return hours + ':' + minutes + ':' + seconds;
  }

  const getCurrentDate = () => {
    let today = new Date();
    let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return currentDate;

  }

  const pressHandler = () => {

    if (btnTitle === "Check in") {

      setcheckinTime(getCurrentTime());
      setTitle("Check out");
      setMessage("You are checked in");
      setDate(getCurrentDate());
      setIsPlaying(true);
    }
    if (btnTitle === "Check out") {

      setcheckoutTime(getCurrentTime());
      setTitle("Check in");
      setMessage("You are checked out");
      setDate(getCurrentDate());
      setIsPlaying(false);
      setKey(prevKey => prevKey + 1)


    }



  }

  return (
    <View style={styles.container1}>
      <Div  column >

        <Div mt="md" alignItems='center' justifyContent='center' p="md">
          <Div borderWidth="md" row mt="lg" >

            <Div column style={{alignContent : "center", color : "purple", justifyContent : "center", alignItems : "center"}} >
            <Text fontSize="16"
            fontWeight="normal"   ml="lg">{liveDate}</Text>
                    <Text mt="md" fontSize="30" 
            fontWeight="bold"   ml="lg">{liveTime}</Text>
          </Div>
          </Div>
        </Div>

      </Div>
            <Text  color= {btnTitle === "Check in" ? "#5A0BDB" : "#a71e1e"} p="2xl">{message} </Text>

<Div pb={6} >
      <CountdownCircleTimer 
       key={key}
        isPlaying={isPlaying}
        duration={40}
        colors={[ '#5A0BDB', '#ED3838', '#ED3838', '#FF4D49' ]}
        colorsTime={[40, 39, 10, 0]}
        
      >

        {({ remainingTime }) => 
        
         
        <Div colum >
         
<Button bg={btnTitle === "Check in" ? "#5006C9" : "#FF5A5A"}
        color= {btnTitle === "Check in" ? "white" : "#a71e1e"}
        fontWeight= "bold"
       
        borderless
        shadow="sm"
        h={145}
        w={145}
        rounded="circle"
        alignSelf="center"
        
        onPress={pressHandler}
      >
        {btnTitle}
      </Button>
        </Div>
       
        }
        
      </CountdownCircleTimer>

     </Div>
    
      <Div rounded ="2xl"  shadow="sm"  px="md" p="md" style={{backgroundColor: "white", width: '85%', marginTop : 10,  }} row >
       <Div  row style={{flex :1 ,  marginBottom : 10 , marginTop : 6,  alignContent : 'center', alignItems : 'center', justifyContent : "center"}}>
        <Div style={{alignItems : 'center', alignContent : 'center', }} column  >

          <Icon name='history'style={{ transform: [{ scaleX: -1 }]}} fontFamily='Octicons' fontWeight="700" fontSize={32} h={60} w={60} rounded='md' />
          <Text> Check in</Text>
          <Text fontSize="lg"
            fontWeight="bold"> {checkinTime}</Text>
        </Div>
        <Div  m="2xl">

        </Div>
        <Div style={{alignItems : 'center', alignContent : 'center',}} column >

          <Icon  style={{ transform: [{ scaleY: -1 }]}} name='history' fontFamily='Octicons' fontSize={32} h={60} w={60} rounded='md' />
          <Text> Check out</Text>
          <Text fontSize="lg" fontWeight="bold"> {checkouTime}</Text>
          </Div>
        </Div>
      </Div>
    </View>

  );
}

const styles = StyleSheet.create({

  container1: {
    backgroundColor : 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   

  },
  container2: {
    color: "red",
    flex: "row",
    justifyContent: "space-between",
    alignContent : 'center',
    borderWidth : 1,
     

  },
  smallcontainer : {
    alignItems : 'center',
     alignContent : 'center',
  },

  textstyle: {
    color: 'black'
  }


});