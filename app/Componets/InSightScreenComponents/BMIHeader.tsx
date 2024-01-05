import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BMIHeader = ({title,subTitle}:any) => {
  return (
    <View style={{width:"100%",alignItems:"center",marginTop:30,padding:10}}>
      <Text style={{fontWeight:"800",fontSize:22,color:"#FFF",textTransform:"uppercase",letterSpacing:1}}>{title}</Text>
      <Text style={{fontWeight:"500",fontSize:15,color:"#FFF",textTransform:"uppercase",letterSpacing:0.6}}>{subTitle}</Text>
    </View>
  )
}

export default BMIHeader

const styles = StyleSheet.create({})