import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SemiHeader from '../SemiHeader'
import LanguageChoose from './LanguageChoose'


const Language = () => {
  return (
    <View style={[{backgroundColor:"#1C1C1E"},StyleSheet.absoluteFill]}>
      <SemiHeader title="Languages"/>
      <LanguageChoose title={"english"} isCheck={true}/>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({})