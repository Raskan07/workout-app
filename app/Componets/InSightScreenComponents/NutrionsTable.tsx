import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TableTitle from './TableTitle'

const NutrionsTable = ({data}:any) => {
    const colors = ['#02fa8a', '#7ffffe', '#fffccc','#fefe62','#01fab8','#02fa8a','#d7f3fe','#D0FD3E']
    const numberOfColors = colors.length

    const getRandom = (min:any,max:any) => {
      return Math.floor(Math.random() * (max - min + 1))  + min 
    }



    const randomNumber = getRandom(0,numberOfColors)

  return (
    <View style={{width:"100%",alignItems:"center",padding:10,marginTop:10,margin:10}}>
   <TableTitle title={"Description"} randomNumber={randomNumber} DescriptionOfNutrion={data?.data?.description}/>
   <TableTitle title={"Protein"} randomNumber={randomNumber} DescriptionOfNutrion={data?.data?.foodNutrients?.Protein.value}/>
   <TableTitle title={"Carbonhydrate"} randomNumber={randomNumber} DescriptionOfNutrion={data?.data?.foodNutrients?.Carbonhydrate.value}/>
   <TableTitle title={"Energy"} randomNumber={randomNumber} DescriptionOfNutrion={data?.data?.foodNutrients?.Energy.value}/>
   <TableTitle title={"Water"} randomNumber={randomNumber} DescriptionOfNutrion={data?.data?.foodNutrients?.Water.value}/>
  </View>
  )
}

export default NutrionsTable

const styles = StyleSheet.create({})