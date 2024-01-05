import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { Link } from 'expo-router';

const FeaturesBtn = ({title,icon,href}:any) => {
  return (
    <Link href={href} asChild>
    <TouchableOpacity style={{margin:10,padding:12,width:120,height:120,backgroundColor:"#2C2C2E",marginLeft:20,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
        <Entypo name={icon} size={65} color="#D0FD3E" />
        <Text style={{color:"#FFFfff",marginTop:3,textTransform:"capitalize",fontSize:14,fontWeight:"600"}}>{title}</Text>
    </TouchableOpacity>
    </Link>
  )
}

export default FeaturesBtn

const styles = StyleSheet.create({})