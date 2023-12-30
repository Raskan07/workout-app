import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StopWatch from '../Componets/InSightScreenComponents/StopWatch'
import HealthyTips from '../Componets/InSightScreenComponents/HealthyTips'

const InsightScreen = () => {
  return (
    <View style={[StyleSheet.absoluteFill,{backgroundColor:"#1C1C1E"}]}>
        <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
          <StopWatch />
        </View>
        <View style={{width:"100%",marginTop:10,alignItems:"center",flexDirection:"row"}}>
          <HealthyTips />
        </View>
    </View>
  )
}

export default InsightScreen

const styles = StyleSheet.create({})