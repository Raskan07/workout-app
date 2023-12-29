import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SemiHeader from '../SemiHeader'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ContactUs = () => {
  return (
    <View>
     <SemiHeader title="Contact Us"/>

     <View style={{margin:10,padding:10,alignItems:"center",flexDirection:"row",justifyContent:"space-around"}}>
     <MaterialCommunityIcons name="gmail" size={24} color="#D0FD3E" />
      <Text style={{textTransform:"uppercase",fontWeight:"700",color:"#FFF",fontSize:17}}>Email:</Text>
      <Text style={{fontWeight:"400",color:"#FFFFFF90",fontSize:17}}>raskanr.j07@gmail.com</Text>
     </View>
    </View>
  )
}

export default ContactUs

const styles = StyleSheet.create({})