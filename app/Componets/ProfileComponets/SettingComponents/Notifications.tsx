import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SemiHeader from '../SemiHeader'
import NotifiCompoenets from './NotifiCompoenets'

const Notifications = () => {
  return (
    <View style={[{backgroundColor:"#1C1C1E",width:"100%"},StyleSheet.absoluteFill]}>
      <SemiHeader title="Notifications"/>
      <View style={{width:"100%",alignItems:"center"}}>
        <NotifiCompoenets title={"Workout Remainders"} isEnable={true}/>
        <NotifiCompoenets title={"Program Notifications"} isEnable={false}/>
      </View>
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({})