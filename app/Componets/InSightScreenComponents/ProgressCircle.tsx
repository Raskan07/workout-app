import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Svg,Circle } from 'react-native-svg'
import Animated,{useAnimatedProps,useSharedValue, withTiming} from 'react-native-reanimated'


const ProgressCircle = ({size,radius,strokeWidth,color,progress,fs,title,subTitle,tt}:any) => {
    const innerRadius = radius - strokeWidth / 2
    const circumfrence = 2 * Math.PI * innerRadius

    const AnimatedCircle = Animated.createAnimatedComponent(Circle)
    const fill = useSharedValue(0)

    useEffect(() => {
        fill.value = withTiming(progress,{duration:3000})
    },[progress])

    const AnimatedProps =  useAnimatedProps(() => ({
     strokeDasharray:[circumfrence * fill.value ,circumfrence]
    }))


  return (
    <View style={{width:size,height:size,alignItems:"center",justifyContent:"center",marginTop:40}}>
      <Svg>
        <Circle 
        r={innerRadius}
        fill={"#1C1C1E"}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        stroke={color}
        opacity={0.2}
        />
         <AnimatedCircle 
        animatedProps={AnimatedProps}
        r={innerRadius}
        fill={"#1C1C1E"}
        cx={radius}
        cy={radius}
        strokeWidth={strokeWidth}
        stroke={color}
        rotation={"-90"}
        originX={radius}
        originY={radius}
        strokeLinecap="round"

        />
      </Svg>
      <Text style={{color:"#ffffff",position:"absolute",zIndex:10,fontSize:fs,fontWeight:"700"}}>{title}
      <Text style={{color:"#FFF",fontWeight:"400",textTransform:"capitalize"}}> {tt}</Text>
      </Text>
      <Text style={{color:"#ffffff90",position:"absolute",zIndex:30,top:120}}>{subTitle}</Text>

      
    </View>
  )
}

export default ProgressCircle

const styles = StyleSheet.create({})