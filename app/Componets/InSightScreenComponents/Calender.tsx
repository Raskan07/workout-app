import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import DateContainer from './DateContainer';
import { Tabs } from 'expo-router';

const Calendar = () => {
  const days = [];

  for (let i = 1; i <= 31; i++) {
    days.push({
      day: i,
    });
  }

  const currentDay = new Date().getDate()

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const currentMonthIndex = new Date().getUTCMonth()
  const currentMonthName = monthNames[currentMonthIndex];

  console.log(currentMonthName)
  const arrow = ">"

  
  return (
    <View style={{ width: '100%', padding: 10 }}>
      <Text style={{color:"#D0FD3E",paddingLeft:12,fontSize:18,fontWeight:"500",borderRadius:3,textTransform:"capitalize"}}>{currentMonthName}  {arrow}</Text>
      <FlatList
        data={days}
        keyExtractor={(item) => item.day.toString()}
        renderItem={({ item }) => (
          <DateContainer day={item.day} currentDay={currentDay} />
        )}
        horizontal
        
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
