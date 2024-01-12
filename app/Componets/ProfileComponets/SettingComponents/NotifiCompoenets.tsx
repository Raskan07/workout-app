import { StyleSheet, Text, TouchableOpacity, View,Switch } from 'react-native'
import React, { useState } from 'react'

const NotifiCompoenets = ({title,onpress,isEnable}:any) => {
    const [isEnabled, setIsEnabled] = useState(isEnable);
    const toggleSwitch = () => setIsEnabled((previousState: any) => !previousState);
  return (
    <View style={[{width:"100%",alignItems:"center",justifyContent:"center",backgroundColor:"#1c1c1e"},StyleSheet.absoluteFill]}>
      <TouchableOpacity
      onPress={onpress}
       style={{
             width: '95%',
             borderWidth: 2,
             borderTopColor: '#2C2C2E',
             marginTop: 10,
             flexDirection: 'row',
             borderRadius: 5,
             padding: 3,
             justifyContent: 'space-between',
             alignItems: 'center',}}>
        <Text style={{color:"#FFF",fontSize:17,padding:5,textTransform:"capitalize",fontWeight:"700"}}>{title}</Text>
        <Switch
        trackColor={{false: '#767577', true: '#D0FD3E'}}
        thumbColor={isEnabled ? '#D0FD3E' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </TouchableOpacity>
      </View>
  )
}

export default NotifiCompoenets

const styles = StyleSheet.create({})