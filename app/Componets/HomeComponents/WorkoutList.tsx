import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WorkoutCard from './WorkoutCard'
import Animation from './Animation'


const WorkoutList = () => {
    const data = [ 
        {
            id:"001",
            workout_name:"back",
            workout_count : 7,
            img:require("../../../assets/wp/b.jpg")
            
        },
        {
            id:"002",
            workout_name:"cardio",
            workout_count : 7,
            img:require("../../../assets/wp/cardio.webp")
        },
        {
            id:"003",
            workout_name:"chest",
            workout_count : 7,
            img:require("../../../assets/wp/chest.jpg")
        },
        {
            id:"004",
            workout_name:"lower arms",
            workout_count : 7,
            img:require("../../../assets/wp/lowerArm.webp")
        },
        {
            id:"005",
            workout_name:"lower legs",
            workout_count : 7,
            img:require("../../../assets/wp/w3.webp")
        },
        {
            id:"006",
            workout_name:"neck",
            workout_count : 7,
            img:require("../../../assets/wp/neck.webp")
            
        },
        {
            id:"007",
            workout_name:"shoulders",
            workout_count : 7,
            img:require("../../../assets/wp/shoulders.webp")
        },
        {
            id:"008",
            workout_name:"upper arms",
            workout_count : 7,
            img:require("../../../assets/wp/upperArm.jpg")
        },
        {
            id:"009",
            workout_name:"upper legs",
            workout_count : 7,
            img:require("../../../assets/wp/upperLeg.webp")
        },
        {
            id:"010",
            workout_name:"waist",
            workout_count : 7,
            img:require("../../../assets/wp/waist.webp")
        }
    ]
  return (
    <View>
        <View style={{paddingLeft:15,padding:5,flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
            <Text style={{color:"#000",textTransform:"capitalize",fontWeight:"600",fontSize:16,padding:10,backgroundColor:"#D0FD3E",borderRadius:15}}> best Workout Plans</Text>
        </View>
      {
        data.map((item,index:any) => (
            <WorkoutCard data={item} key={index} />
        ))
      }
    </View>
  )
}

export default WorkoutList

const styles = StyleSheet.create({})