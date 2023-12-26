import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

const SemiHeader = ({title}:any) => {
    const router = useRouter()
  return (
    <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
    <TouchableOpacity onPress={() => router.push("/Componets/ProfileComponets/Setting")}>
       <AntDesign
         name="left"
         size={24}
         color="#fff"
         style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
       />
     </TouchableOpacity>
     <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:55}}>{title}</Text>
     </View>

  )
}

export default SemiHeader

const styles = StyleSheet.create({})