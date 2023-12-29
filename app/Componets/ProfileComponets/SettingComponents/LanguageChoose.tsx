import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SemiHeader from '../SemiHeader'
import Checkbox from 'expo-checkbox';

const LanguageChoose = ({title,onPress,isCheck}:any) => {
    const [isCheckedMetric, setCheckedMetric] = useState(isCheck);
  return (
    <View>
    <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity 
    onPress={onPress}
    style={{
           width: '94%',
           borderWidth: 2,
           borderTopColor: '#2C2C2E',
           marginTop: 10,
           flexDirection: 'row',
           borderRadius: 5,
           padding: 3,
           justifyContent: 'space-between',
           alignItems: 'center',}}>
      <Text style={{color:"#FFF",fontSize:17,padding:5,textTransform:"capitalize",fontWeight:"700"}}>{title}</Text>
      <Checkbox
        style={{padding:5,marginLeft:15,}}
        value={isCheckedMetric}
        onValueChange={setCheckedMetric}
        color={isCheckedMetric ? '#D0FD3E' : undefined}
      />
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default LanguageChoose

const styles = StyleSheet.create({})