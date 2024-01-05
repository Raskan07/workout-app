import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, FlatList,Text } from 'react-native';
import DateContainer from './DateContainer';
import { AntDesign } from '@expo/vector-icons'; 

const Calendar = () => {
  const days = [];

  for (let i = 1; i <= 31; i++) {
    const setDate = new Date().setDate(i)
    const fulldate = new Date(setDate).toDateString()
    const updateWeekOfDay = fulldate.slice(0,1)
    days.push({
      day: i,
      weekofday : updateWeekOfDay
    });
  }

  const currentDay = new Date().getDate()

  const monthNames = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const currentMonthIndex = new Date().getUTCMonth()

  const [nextMonth,setNextMonth] = useState(0)
  const currentMonthName = monthNames[currentMonthIndex + nextMonth];

  const getNextMonth = () => {
    setNextMonth(nextMonth + 1)
  }

  const getPreviusMonth = () => {
    setNextMonth(nextMonth -1)
  }

  const currentYear = new Date().getFullYear()

  const dayatstr = new Date().toDateString()
  const day = dayatstr.slice(0,1)





  





  
  return (
    <View style={{ width: '100%', padding: 10,backgroundColor:"#2C2C2E",paddingBottom:15,paddingTop:35 }}>
      <View style={{width:"100%",padding:10,flexDirection:"row",alignItems:"baseline",justifyContent:"space-between",top:-20}}>
      <AntDesign onPress={getPreviusMonth} name="left" size={24} color="#FFF" />
      <Text style={{fontSize:17,color:"#FFFFFF",textTransform:"capitalize",fontWeight:"500"}}>{currentMonthName} {currentYear}</Text>
      <AntDesign onPress={getNextMonth} name="right" size={24} color="#FFF" />
      </View>
      <FlatList
        data={days}
        keyExtractor={(item) => item.day.toString()}
        renderItem={({ item }) => (
          <DateContainer day={item.day} weekofDay={item.weekofday} currentDay={currentDay} dayAtStr={day} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
