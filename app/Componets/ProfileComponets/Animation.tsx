import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';

const CelAnimation = () => {
    const animation = useRef(null);
  return (
    <View style={{width:"100%",}}>
    <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: 500,
        }}
        source={require('../../../assets/animations/celebration.json')}
      />
    </View>
  )
}

export default CelAnimation

const styles = StyleSheet.create({})