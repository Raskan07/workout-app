import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StopWatch from '../Componets/InSightScreenComponents/StopWatch'
import HealthyTips from '../Componets/InSightScreenComponents/HealthyTips'
import BMI from '../Componets/InSightScreenComponents/BMI'
import Calender from '../Componets/InSightScreenComponents/Calender'
import { ScrollView } from 'react-native-virtualized-view'
import ProgressCircle from '../Componets/InSightScreenComponents/ProgressCircle'
import FeaturesBtn from '../Componets/InSightScreenComponents/FeaturesBtn'
import { FlatList } from 'react-native-gesture-handler'


const InsightScreen = () => {
  const data = [
    {
      title:"Workout Watch",
      icon:"stopwatch",
      herf:"/Componets/InSightScreenComponents/StopWatch"
    },
    {
      title:"BMI calCulator",
      icon:"500px",
      herf:"/Componets/InSightScreenComponents/BMIcal"
    },
    {
      title:"Nutrions",
      icon:"leaf",
      herf:"/Componets/InSightScreenComponents/HealthyTips"
    },
  ]
  return (
    <ScrollView style={[StyleSheet.absoluteFill,{backgroundColor:"#1C1C1E"}]}>
      <Calender />
      <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
        <ProgressCircle 
        size={200} 
        radius={100} 
        strokeWidth={10}  
        color={"#D0FD3E"} 
        progress={0.20} 
        fs={30}
        title={"652"}
        subTitle={"Active Calories"}
        tt={"cal"}
        />
      </View>
      <View style={{width:"100%",alignItems:"center",justifyContent:"space-around",flexDirection:"row",gap:40}}>
      <ProgressCircle 
        size={100} 
        radius={50} 
        strokeWidth={5}  
        color={"#FF2424"} 
        progress={0.85} 
        fs={18}
        title={"19"}
        subTitle={""}
        tt={"min"}
        />
        <ProgressCircle 
        size={100} 
        radius={50} 
        strokeWidth={5}  
        color={"#E79332"} 
        progress={0.60} 
        fs={18}
        title={"72"}
        subTitle={""}
        tt={"bpm"}
        />
      </View>
      <View style={{padding:10,margin:10,}}>
        <Text style={{fontSize:20,fontWeight:"700",color:"#FFF",textTransform:"uppercase",marginTop:10}}>Features</Text>
      </View>
      <View style={{flexDirection:"row",alignItems:"center",gap:1}}>
        <FlatList
        data={data}
        keyExtractor={(item) => item.icon}
        renderItem={({item,index}) => {
          return <FeaturesBtn title={item.title} icon={item.icon} href={item.herf} />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
      
      </View>
    </ScrollView>
  )
}

export default InsightScreen

const styles = StyleSheet.create({})













      {/* <View style={{width:"100%",marginTop:10,paddingLeft:10,marginLeft:10,alignItems:"center"}}>
      <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 23, textTransform: 'uppercase', marginTop: 20, color: '#FFF' }}>Insights</Text>
      </View>
          <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
            <Calender />
          </View>
        <View style={{width:"100%",marginTop:10,alignItems:"center"}}>
          <StopWatch />
        </View>
        <View style={{width:"100%",marginTop:10,alignItems:"center",flexDirection:"row"}}>
          <HealthyTips />
          <BMI />
        </View> */}