import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StopWatch from '../Componets/InSightScreenComponents/StopWatch'
import HealthyTips from '../Componets/InSightScreenComponents/HealthyTips'
import BMI from '../Componets/InSightScreenComponents/BMI'
import Calender from '../Componets/InSightScreenComponents/Calender'
import { ScrollView } from 'react-native-virtualized-view'


const InsightScreen = () => {
  return (
    <ScrollView style={[StyleSheet.absoluteFill,{backgroundColor:"#1C1C1E"}]}>
      {/* <View style={{width:"100%",marginTop:10,paddingLeft:10,marginLeft:10,alignItems:"center"}}>
      <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 23, textTransform: 'uppercase', marginTop: 20, color: '#FFF' }}>Insights</Text>
      </View> */}
          <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
            <Calender />
          </View>
        <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
          <StopWatch />
        </View>
        <View style={{width:"100%",marginTop:10,alignItems:"center",flexDirection:"row"}}>
          <HealthyTips />
          <BMI />
        </View>
        
        
    </ScrollView>
  )
}

export default InsightScreen

const styles = StyleSheet.create({})