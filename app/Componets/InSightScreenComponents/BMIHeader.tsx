import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BMIHeader = ({title,subTitle}:any) => {
  return (
    <View style={{width:"100%",marginTop:10,flexDirection:"row"}}>
      <Text style={{fontWeight:"800",fontSize:22,color:"#FFF",textTransform:"uppercase",letterSpacing:1}}>{title}</Text>
      <Text style={{fontWeight:"500",fontSize:15,color:"#FFFFFF90",textTransform:"lowercase",letterSpacing:0.6,marginLeft:40}}>{subTitle}</Text>
    </View>
  )
}

export default BMIHeader

const styles = StyleSheet.create({})