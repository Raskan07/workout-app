import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'


const BMI = () => {
  return (
    <Link href={"/Componets/InSightScreenComponents/BMIcal"} asChild>
    <TouchableOpacity style={{width:100,height:100,padding:10,backgroundColor:"#D0FD3E",borderRadius:15}}>
     <LinearGradient
        colors={['#DBCD38', "#71E73A"]}
        style={{width:100,height:100,padding:10,margin:10,alignItems:"center",justifyContent:"center",borderRadius:15}}
      >
        <Text style={{fontSize:30,fontWeight:"800",color:"#FFF",textTransform:"uppercase"}}>BMI</Text>
      </LinearGradient>
    </TouchableOpacity>
    </Link>
  )
}

export default BMI

const styles = StyleSheet.create({})