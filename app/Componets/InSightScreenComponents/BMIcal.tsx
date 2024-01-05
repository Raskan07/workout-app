import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import BMIHeader from './BMIHeader'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BMIcal = () => {
  const [age, setAge] = useState('');
  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')

  const data = {age,height,weight}


  const router = useRouter()
  return (
    <View>

<View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
    <TouchableOpacity onPress={() => router.push("/(tabs)/InsightScreen")}>
       <AntDesign
         name="left"
         size={24}
         color="#fff"
         style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
       />
     </TouchableOpacity>
     <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:30}}>BMI calculator</Text>
     </View>
      <BMIHeader title={"how old are you?"} subTitle={"This Helps us to create BMI report"}/>
      <View style={{width:"100%",alignItems:"center",marginTop:5}}>
      <TextInput
        style={{width:200,borderWidth:1,borderRadius:15,height:50,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setAge}
        value={age}
        keyboardType="numeric"
      />
      </View>

      <BMIHeader title={"What's your weight?"} subTitle={"you can allways change latter"}/>
      <View style={{width:"100%",alignItems:"center",marginTop:5}}>
      <TextInput
        style={{width:200,borderWidth:1,borderRadius:15,height:50,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setWeight}
        value={weight}
        keyboardType="numeric"
      />
      </View>

      <BMIHeader title={"What's your Height?"} subTitle={"this help us to create workout plan"}/>
      <View style={{width:"100%",alignItems:"center",marginTop:5}}>
      <TextInput
        style={{width:200,borderWidth:1,borderRadius:15,height:50,borderColor:"#D0FD3E",fontSize:22,color:"#FFF",fontWeight:"600",textAlign:"center"}}
        onChangeText={setHeight}
        value={height}
        keyboardType="numeric"
      />
      </View>


      <View style={{width:"100%",alignItems:"center",marginTop:5}}>

      <TouchableOpacity 
      onPress={() => router.push({pathname:"/Componets/InSightScreenComponents/BMIReport",params:data})}
      style={{width:300,padding:10,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:"#D0FD3E",marginTop:90}}>
        <Text style={{color:"#000",fontSize:20,fontWeight:"800",textTransform:"uppercase"}}>Calculate BMI</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  )
}

export default BMIcal

const styles = StyleSheet.create({})