import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TableTitle = ({title,randomNumber,DescriptionOfNutrion}:any) => {
    const colors = ['#02fa8a', '#7ffffe', '#fffccc','#fefe62','#01fab8','#02fa8a','#d7f3fe','#D0FD3E']

  return (
    <View style={{width:"100%",borderTopWidth:1,borderBottomWidth:1,borderColor:colors[randomNumber],padding:7,flexDirection:"row",marginTop:5}}>
      <Text style={{color:"#FFFFFF90"}}>{title} :</Text>
      <Text style={{fontSize:15,color:"#FFF"}}> {DescriptionOfNutrion}</Text>
    </View>
  )
}

export default TableTitle

const styles = StyleSheet.create({})