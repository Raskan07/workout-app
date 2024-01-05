import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo,Feather } from '@expo/vector-icons'; 
import Animated ,{ FadeIn, FadeInLeft, FadeOut,  useSharedValue,
  useDerivedValue,
  withSpring,
  useAnimatedStyle, } from 'react-native-reanimated';


const StopWatch = () => {
    const [sec,setSec] = useState(0);
    const [min,setMin] = useState(0);
    const [hur,setHur] = useState(0);
    const [running,setrunning] = useState(false)

    const start = () => {
        setrunning(true)

    }
    const stop = () => {
        setrunning(false)
        
    }
    const reset = () => {
        setrunning(false)
        setSec(0)
        setMin(0)
        setHur(0)
    }

    useEffect(() => {
        let intreval: string | number | NodeJS.Timeout | undefined ;
        if(running){
          intreval = setInterval(() => {
            setSec(sec + 1);
            if (sec === 60) {
              setMin(min + 1);
              setSec(0);
            }
            if (min === 60) {
              setHur(hur + 1);
              setMin(0);
            }
          }, 1000);

        }else {
            clearInterval(intreval)
        }

        return () => clearInterval(intreval);
    },[running,sec,min,hur])

    const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);
  return (
    <View style={{width:"94%",height:"97%",alignItems:"center",backgroundColor:"#D0FD3E",padding:10,borderRadius:30,margin:10,justifyContent:"center"}}>
      <Animated.Text  entering={FadeInLeft.delay(200).springify()} exiting={FadeOut} style={{fontSize:80,fontWeight:"500",color:"#000"}}>{`${formatTime(hur)}:${formatTime(min)}:${formatTime(sec)}`}</Animated.Text>
      <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
        <TouchableOpacity style={{width:75,padding:10,backgroundColor:"#2c2c2e",paddingLeft:10,paddingRight:10,borderRadius:5,alignItems:"center",justifyContent:"center"}} onPress={reset}>
        <Feather name="rotate-cw" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={{width:75,padding:10,backgroundColor:"#2c2c2e",paddingLeft:10,paddingRight:10,borderRadius:5,alignItems:"center",justifyContent:"center"}} onPress={stop}>
        <Feather name="pause" size={30} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={{width:75,padding:10,backgroundColor:"#2c2c2e",paddingLeft:10,paddingRight:10,borderRadius:5,alignItems:"center",justifyContent:"center"}} onPress={start}>
        <Entypo name="controller-play" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StopWatch

const styles = StyleSheet.create({})