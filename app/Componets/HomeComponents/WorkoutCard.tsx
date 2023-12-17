import { StyleSheet, Text, View,TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const WorkoutCard = ({data}:any) => {
    
    const img = require("../../../assets/wp/w3.webp")
  return (
    <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:30}}>
      <TouchableOpacity onPress={() => console.log(data?.workout_name)} style={{width:"90%",}}>
        <ImageBackground source={data.img} style={{width:"100%",height:200,borderRadius:40}} imageStyle={{borderRadius:40}}>
            <LinearGradient colors={['transparent', '#000000']} style={{position:"absolute",zIndex:10,bottom:0,width:"100%",borderRadius:30}}>
                <Text style={{paddingLeft:10,color:"#FFF",fontSize:18,fontWeight:"700",textTransform:"capitalize"}}>{data?.workout_name} workout</Text>
                <Text style={{paddingLeft:10,color:"#D0FD3E",fontSize:15,fontWeight:"500",textTransform:"capitalize",letterSpacing:2}}>| {data.workout_count} workouts</Text>
            </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default WorkoutCard

const styles = StyleSheet.create({})