import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StopWatch from '../Componets/InSightScreenComponents/StopWatch'

const InsightScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFill,{backgroundColor:"#1C1C1E"}]}>
        <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
          <StopWatch />
        </View>
    </View>
  )
}

export default InsightScreen

const styles = StyleSheet.create({})