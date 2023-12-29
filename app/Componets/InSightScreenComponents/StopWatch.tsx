import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

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
                setSec((prevSec) => (prevSec === 59 ? 0 : +1))
                setMin((prevMin) => (prevMin === 59 && sec === 59 ? prevMin + 1 : prevMin));
                setHur((prevHur) => (prevHur === 23 && min === 59 && sec === 59 ? prevHur + 1 : prevHur));
            },1000)

        }else {
            clearInterval(intreval)
        }

        return () => clearInterval(intreval);
    },[running,sec,min,hur])

    const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);
  return (
    <View style={{}}>
      <Text style={{}}>{`${formatTime(hur)}:${formatTime(min)}:${formatTime(sec)}`}</Text>
      <View style={{}}>
        <TouchableOpacity style={{}} onPress={start}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={stop}>
          <Text>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StopWatch

const styles = StyleSheet.create({})