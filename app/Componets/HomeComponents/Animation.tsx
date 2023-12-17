import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const Animation = () => {
    const animation = useRef(null);
  return (
    <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 50,
          height: 50,
          backgroundColor:"#FFF",
          borderRadius:100
        }}
        source={require("../../../assets/animations/dumble.json")}
      />
  )
}

export default Animation

const styles = StyleSheet.create({})