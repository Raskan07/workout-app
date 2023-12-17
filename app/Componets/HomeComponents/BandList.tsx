import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Band from './Band'

const BandList = () => {
    const date = new Date().toDateString()
  return (
    <View>
        <View style={{paddingLeft:15,padding:5,flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{color:"#FFF",textTransform:"capitalize",fontWeight:"600",fontSize:16}}>Workout Plan</Text>
            <Text style={{color:"#D0FD3E",textTransform:"capitalize",fontWeight:"600",fontSize:14,left:-20}}>{date}</Text>
        </View>
      <Band />
    </View>
  )
}

export default BandList

const styles = StyleSheet.create({})