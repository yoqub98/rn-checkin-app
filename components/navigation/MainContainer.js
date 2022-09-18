import * as React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import { initializeApp } from 'firebase/app';
//screens 
import HomeScreen from './screens/HomeScreen';
import Attendance from './screens/Attendance';
import Account from './screens/Account';

////////////////////// Firebase Credentials 











///////////////////////////////// App
const item1 = "Home" ;
const item2 = "Attendance"; 
const item3 = "Account";
 


const Tab = createBottomTabNavigator();
function MainContainer () {

    return (
<NavigationContainer >
    
    <Tab.Navigator 
    
   
initialRoutename = {item1}
screenOptions={({ route }) => ({


          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === item1) {
              iconName = focused ? 'home' : 'home';
              

            } else if (rn === item2) {
              iconName = focused ? 'check-square' : 'check-square';

            } else if (rn === item3) {
              iconName = focused ? 'settings' : 'settings';
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5001D1',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 3,  fontSize: 12,  },
          style: { padding: 66, height: 190, color : "red" }
        }} >

        <Tab.Screen  name={item1} color="red" component={HomeScreen} />
        <Tab.Screen name={item2} component={Attendance} />
        <Tab.Screen name={item3} component={Account} />

    </Tab.Navigator>
</NavigationContainer>
    );
}
export default MainContainer ;