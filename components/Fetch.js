import {View, Text, FlatList, StyleSheet, Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFirestore, onSnapshot,querySnapshot } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";
import {firebase} from './config';
import CalendarStrip from 'react-native-calendar-strip';
 const Fetch = () => {
const [ attendance, setAttendance] = useState([]);
const attendanceRef = firebase.firestore().collection('Employee.Attendance');

useEffect(async () => {
    attendanceRef
    .onSnapshot (
        querySnapshot => {
            const attendance = [] 
            querySnapshot.forEach((doc)=>{
                const {date, checkin, checkout} = doc.data()
                attendance.push({
                    id : doc.id,
                  date,checkin,checkout
                })
                })
                setAttendance(attendance)
            })
        }, [])


    return (
        <View style={{flex:1, marginTop:100}}>
            <FlatList
                style={{height:'100%'}}
                data={attendance}
                numColumns={1}
                renderItem={({item}) => (
                    <Pressable
                    style={styles.container}
                    >
                    <View style={styles.innerContainer}>
                    <Text style={styles.itemHeading}>{item.date}</Text>
                    <Text style={styles.itemText}>{item.checkin}</Text>
                    <Text style={styles.itemText}>{item.checkout}</Text>
                    </View> 
                        
                    </Pressable>

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        padding: 15,
        borderRadius: 15,
        margin:5,
        marginHorizontal: 10,
    },
    innerContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },

    itemHeading: {
        fontWeight: 'bold'
    },
    itemText: {
        fontWeight: '300'
    }
});

export default Fetch
 