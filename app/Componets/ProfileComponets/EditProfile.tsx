import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'

const EditProfile = () => {
  const router = useRouter()
  const vector ='https://static.vecteezy.com/system/resources/previews/025/851/732/original/minimalistic-round-logo-template-white-icon-of-man-head-profile-portrait-silhouette-on-black-background-modern-logotype-concept-for-business-identity-t-shirts-print-tattoo-illustration-vector.jpg';

  return (
    <View style={{width:"100%"}}>
       <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
     <TouchableOpacity onPress={() => router.push("/(tabs)/ProfileScreen")}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
        />
      </TouchableOpacity>
      <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:40}}>Edit  Profile</Text>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', padding: 10 ,alignItems:"center",justifyContent:"center"}}>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 100,
            borderWidth: 7,
            borderColor: '#D0FD3E',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftColor: '#2C2C2E', 
          }}>
          <TouchableOpacity
            style={{
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: '#2C2C2E',
              alignItems: 'center',
              justifyContent: 'center',
              borderLeftColor: '#FFFFFF',
            }}>
            <Image source={{ uri: vector }} style={{ width: 150, height: 150, borderRadius: 100, margin: 10 }} />
            <Ionicons name="md-camera-outline" size={35} color="#FFF" style={{position:"absolute",zIndex:10,top:120,right:20}} />
          </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})