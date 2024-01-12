import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Image } from 'expo-image'
import { ScrollView } from 'react-native-virtualized-view'
import { FontAwesome5,Entypo } from '@expo/vector-icons'; 



const OnExcersieDetails = () => {
    const data = useLocalSearchParams()
    console.log("data form ex-d",data)
    const router = useRouter()
  return (
    <ScrollView>
    <View style={[{backgroundColor:"#1C1C1E"},StyleSheet.absoluteFill]}>
    <Entypo 
    onPress={() => router.back()}
    name="cross" 
    size={24} 
    color="black"  
    style={{position:"absolute",zIndex:10,padding:10,top:10,right:10,backgroundColor:"#D0FD3E90",borderRadius:30}}/>
        {/* @ts-ignore */}
      <Image  source={{ uri: data?.gifUrl }} style={{width:"100%",height:400}}/>

      <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
        <View style={{flexDirection:"row",padding:5,borderRadius:15,margin:10,backgroundColor:"#2C2C2E"}}>
        <FontAwesome5 name="dumbbell" size={24} color="#fff" />
        <Text style={{color:"#FFF",textTransform:"capitalize",fontSize:15,paddingLeft:15}}>15 × 3</Text>
        </View>
        <View style={{flexDirection:"row",padding:5,borderRadius:15,margin:10,backgroundColor:"#D0FD3E"}}>
        <FontAwesome5 name="fire" size={24} color="#000" />
        <Text style={{color:"#000",textTransform:"uppercase",fontSize:15,paddingLeft:15,fontWeight:"600"}}>100 cal </Text>
        </View>

      </View>
      <View style={{padding:10,margin:10}}>
        <Text style={{color:"#FFF",fontSize:20,fontWeight:"600",textTransform:"capitalize"}}>{data?.name}</Text>
        <Text style={{color:"#FFF",fontSize:15,fontWeight:"400",textTransform:"capitalize"}}>
            <Text style={{color:"#D0FD3E",fontSize:15,fontWeight:"700",textTransform:"capitalize"}}>Traget:  </Text>
            {data?.target}</Text>
        <Text style={{color:"#D0FD3E",fontSize:19,fontWeight:"700",textTransform:"uppercase",marginTop:10,padding:10,backgroundColor:"#2c2c2c",textAlign:"center",borderRadius:15}}>Instractions</Text>
        <Text style={{color:"#FFF",marginTop:10,textTransform:"capitalize"}}>
            {
                data?.instructions
            }
        </Text>

        <View style={{alignItems:"baseline",justifyContent:"center",width:"100%",flexDirection:"row",marginTop:20}}>
            <TouchableOpacity onPress={() => router.back()}

            style={{width:"80%",padding:10,backgroundColor:"#D0FD3E",alignItems:"center",justifyContent:"center",borderRadius:15,elevation:5}}>
                <Text style={{color:"#000",fontWeight:"800",fontSize:18,textTransform:"uppercase",letterSpacing:1}}>Finish</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
    </ScrollView>
  )
}

export default OnExcersieDetails

const styles = StyleSheet.create({})