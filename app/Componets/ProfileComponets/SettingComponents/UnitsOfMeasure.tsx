import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SemiHeader from '../SemiHeader'
import Checkbox from 'expo-checkbox';

const UnitsOfMeasure = () => {
  const [isCheckedMetric, setCheckedMetric] = useState(false);
  const [isCheckedImperial, setCheckedImperial] = useState(false);
  return (
    <View>
      <SemiHeader title="Units of Measure"/>
      <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
      <TouchableOpacity style={{
             width: '94%',
             borderWidth: 2,
             borderTopColor: '#2C2C2E',
             marginTop: 10,
             flexDirection: 'row',
             borderRadius: 5,
             padding: 3,
             justifyContent: 'space-between',
             alignItems: 'center',}}>
        <Text style={{color:"#FFF",fontSize:17,padding:5,textTransform:"capitalize",fontWeight:"700"}}>Metric</Text>
        <Checkbox
          style={{padding:5,marginLeft:15,}}
          value={isCheckedMetric}
          onValueChange={setCheckedMetric}
          color={isCheckedMetric ? '#D0FD3E' : undefined}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{
             width: '94%',
             borderWidth: 2,
             borderTopColor: '#2C2C2E',
             marginTop: 10,
             flexDirection: 'row',
             borderRadius: 5,
             padding: 3,
             justifyContent: 'space-between',
             alignItems: 'center',}}>
        <Text style={{color:"#FFF",fontSize:17,padding:5,textTransform:"capitalize",fontWeight:"700"}}>Imperial</Text>
        <Checkbox
          style={{padding:5,marginLeft:15,}}
          value={isCheckedImperial}
          onValueChange={setCheckedImperial}
          color={isCheckedImperial ? '#D0FD3E' : undefined}
        />
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default UnitsOfMeasure

const styles = StyleSheet.create({})