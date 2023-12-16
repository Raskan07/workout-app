import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const HomeScreen = () => {
  
  return (
    <View style={[StyleSheet.absoluteFill,{backgroundColor:"#1C1C1E"}]}>
      <Stack  screenOptions={{
        headerShown:false
      }}/>

      <View style={{margin:10,padding:10}}>
      <Text style={{fontSize:30,color:"#ffffff",textTransform:'uppercase',fontWeight:"700"}}>
       <Text style={{fontSize:28,color:"#ffffff",textTransform:'uppercase',fontWeight:"300"}}>Hello  </Text> 
           Raskan,
        </Text>
        <Text style={{fontSize:15,color:"#ffffff90",textTransform:"uppercase",fontWeight:"400",letterSpacing:2}}>Wellcome to workout-hunt</Text>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})