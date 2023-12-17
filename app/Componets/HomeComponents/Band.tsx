import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const Band = () => {
    const img = require("../../../assets/wp/w2.jpg")
  return (
    <TouchableOpacity style={{width:"100%",alignItems:"center",justifyContent:"center",height:240}}>
      <ImageBackground source={img} imageStyle={{borderRadius:15}} style={{width:"95%",height:220,borderRadius:15,marginLeft:15,elevation:2}}>

      </ImageBackground>
    </TouchableOpacity>
  )
}

export default Band

const styles = StyleSheet.create({})