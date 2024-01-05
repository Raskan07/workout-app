import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const DateContainer = ({day,currentDay,dayAtStr,weekofDay}:any) => {
  return (
    <TouchableOpacity
     style={[{width:50,height:75,alignItems:"center",justifyContent:"center",padding:10,borderRadius:30,backgroundColor:"#3A3A3C",borderWidth:1,borderColor:"#D0FD3E",margin:5},day === currentDay ? {backgroundColor:"#D0FD3E"} : {backgroundColor:"#3A3A3C"}]}>
              <Text style={[{color:"#FFF",fontSize:18,fontWeight:"900",textTransform:"uppercase"} ,day === currentDay ? {color:"#000"} : {color:"#FFF"}]}>{weekofDay}</Text>
      <Text style={[{color:"#FFF",fontSize:18,fontWeight:"900"} ,day === currentDay ? {color:"#000"} : {color:"#FFF"}]}>{day}</Text>
    </TouchableOpacity>
  )
}

export default DateContainer

const styles = StyleSheet.create({})