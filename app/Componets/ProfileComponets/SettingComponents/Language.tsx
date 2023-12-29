import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SemiHeader from '../SemiHeader'
import LanguageChoose from './LanguageChoose'


const Language = () => {
  return (
    <View>
      <SemiHeader title="Languages"/>
      <LanguageChoose title={"english"} isCheck={true}/>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({})