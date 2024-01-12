import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import axios from 'axios'
import BMIHeader from './BMIHeader'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import LottieView from 'lottie-react-native';

const BMIcal = () => {
  const [age, setAge] = useState('');
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')

  const data = {age,height,weight}


  const router = useRouter()
  const animation = useRef(null);
  return (
    <View style={[{backgroundColor:"#1C1C1E"},StyleSheet.absoluteFill]}>
      <View style={{flexDirection:"row",alignItems:"center",width:"100%"}}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "50%",
          height: "100%",
          backgroundColor: '#1C1C1E',
        }}
        source={require("../../../assets/animations/body.json")}
      />
      <View style={{width:"50%",alignItems:"center",flexDirection:"column"}}>
      <BMIHeader title={"Age"} subTitle={""}/>
      <TextInput
        style={{width:170,borderWidth:1,borderRadius:15,height:60,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
        placeholder='0'
        placeholderTextColor={"#fff"}
      />

      <BMIHeader title={"Height"} subTitle={"CM"}/>
      <TextInput
        style={{width:170,borderWidth:1,borderRadius:15,height:60,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setHeight}
        value={height}
        keyboardType="numeric"
        placeholder='0'
        placeholderTextColor={"#fff"}
      />

      <BMIHeader title={"Weight"} subTitle={"kg"}/>
      <TextInput
        style={{width:170,borderWidth:1,borderRadius:15,height:60,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setWeight}
        value={weight}
        keyboardType="numeric"
        placeholder='0'
        placeholderTextColor={"#fff"}
      />
      </View>

      <View style={{width:"100%",alignItems:"center",marginTop:5,position:"absolute",bottom:-50}}>

      <TouchableOpacity 
      onPress={() => router.push({pathname:"/Componets/InSightScreenComponents/BMIReport",params:data})}
      style={{width:300,padding:10,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:"#D0FD3E",marginTop:90}}>
        <Text style={{color:"#000",fontSize:20,fontWeight:"800",textTransform:"uppercase"}}>Calculate BMI</Text>
      </TouchableOpacity>

      </View>
    

      </View>




    </View>
  )
}

export default BMIcal

const styles = StyleSheet.create({})