import { StyleSheet, Text, View ,Image,TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'


const HealthyTips = () => {
    const img = require("../../../assets/wp/h1.png")

    const onHealth = () => {
        Linking.openURL("https://www.health.com/weight-loss/30-simple-diet-and-fitness-tips")
    }
  return (
    <TouchableOpacity onPress={() => onHealth()} style={{width:200,height:200,padding:10,margin:10,alignItems:"center",justifyContent:"center",borderRadius:15}}>
         <LinearGradient
        colors={['#DBCD38', "#71E73A"]}
        style={{width:202,height:202,padding:10,margin:10,alignItems:"center",justifyContent:"center",borderRadius:15}}
      >
        <Image  source={img} style={{width:200,height:200,borderRadius:15}}/>
      </LinearGradient>
      <Text style={{color:"#fff",position:"absolute",fontWeight:"700",fontSize:18,width:"100%",backgroundColor:"#2c2c2e90",textAlign:"center",top:145,padding:10,borderRadius:30,textTransform:"uppercase"}}>Healthy Tips</Text>
    </TouchableOpacity>
  )
}

export default HealthyTips

const styles = StyleSheet.create({})