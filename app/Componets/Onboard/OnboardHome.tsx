import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { Link } from 'expo-router';
import Animated ,{ FadeIn, FadeInLeft, FadeOut } from 'react-native-reanimated';

const OnboardHome = () => {
    const OnboardSteps = [
      {
      img:require("../../../assets/wp/p3.jpg"),
      title:"Meet your coach",
      subTitle:"Start Your journey"
    },
    {
      img:require("../../../assets/wp/p4.png"),
      title:"create a workout plan",
      subTitle:"Stay fit"
    },
    {
      img:require("../../../assets/wp/p2.png"),
      title:"Action is the ",
      subTitle:"key To all success"
    }
  ]

  const [screenIndex,setScreenIndex] = useState(0)

  const data = OnboardSteps[screenIndex]

  console.log( OnboardSteps.length === screenIndex -1)

  const OnBardActive = () => {
    const screenEnd = OnboardSteps.length - 1 === screenIndex;
    if (screenEnd) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  }

  const end = OnboardSteps.length - 1 === screenIndex
  return (
    <View style={[StyleSheet.absoluteFill,{}]}>
      <View style={{position:"absolute",zIndex:10,top:30,flexDirection:"row",gap:-10}}>
        {
          OnboardSteps.map((steps,index) => (
            <View key={index} style={[styles.indicator,screenIndex === index ?{ backgroundColor:"#D0FD3E"} : {backgroundColor:"gray"}]}/>
          ))
        }
      </View>
            <Image source={data.img}  style={{
              width:"100%",
              height:400,
            }} />

            
       
            <View style={styles.prev}>
              <Animated.View entering={FadeInLeft.delay(200).springify()}  exiting={FadeOut} style={{alignItems:"center"}}>
              <Text style={{fontSize:26,color:"#FFF",textTransform:"uppercase",fontWeight:"600",letterSpacing:1,textAlign:"center"}}>{data.title}</Text>
              <Text style={{fontSize:30,color:"#FFF",textTransform:"uppercase",fontWeight:"900",letterSpacing:0.5}}>{data.subTitle}</Text>
              </Animated.View>
              { !end ?
              <TouchableOpacity 
              onPress={() => OnBardActive()}
              style={{width:"100%",alignItems:"center",marginTop:20,top:70, right:-120}}>
              <AntDesign name="caretright" size={24} color="black"  style={{padding:10,borderRadius:30,backgroundColor:"#D0FD3E"}}/>
              </TouchableOpacity> :

              <Animated.View entering={FadeInLeft.delay(200).springify()} exiting={FadeOut} style={{width:"100%",alignItems:"center"}}>
              <Link href={"/(tabs)/HomeScreen"} asChild>
              <TouchableOpacity style={{width:"90%",padding:10,alignItems:"center",justifyContent:"center",backgroundColor:"#D0FD3E",marginTop:25,top:20,borderRadius:15}}>
                <Text style={{fontSize:20,fontWeight:"800",color:"#000",textTransform:"uppercase",letterSpacing:1}}>Start</Text>
              </TouchableOpacity>
              </Link>
              </Animated.View>
              }

            </View>
        
      
    </View>
  )
}

export default OnboardHome

const styles = StyleSheet.create({
  prev:{
    width:"100%",
    height:"50%",
    backgroundColor:"#1C1C1E",
    top:-25,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    elevation:4,
    alignItems:"center",
    justifyContent:"center"
  },
  indicator:{
    flex:1,
    margin:10,
    height:5,
    borderRadius:15
  }
})