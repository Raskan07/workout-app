import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FetchData } from '../../API/BMIcal'
import { useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'



const BMIReport = () => {

  const router =useRouter()

    const [res,setRes] =  useState()
    const [loading, setLoading] = useState(true);
    

    const data = useLocalSearchParams()
    
    const age = String(data?.age)
    const weight = String(data?.weight)
    const height = String(data?.height)

    useEffect(() => {
        GetBMI()
    },[])
    const GetBMI = async () => {
        try {
            const response =  await FetchData({age,weight,height})
            console.log("response",response)
            setRes(response)
            
        } catch (error) {
            console.log(error)
        }
    }

    const StatusColor = 
    {
      Normal :"#D0FD3E",
      obessy : "#FF2424"
    }

    useEffect(() => {
      GetBMI()
          .finally(() => setLoading(false));
  }, []);

  // @ts-ignore
    const bmiRate = res?.data?.bmi
    // @ts-ignore
    const bmiStatus = res?.data?.health
    // @ts-ignore
    const bmiClass = res?.data?.healthy_bmi_range

  return (
    <View>
      <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
    <TouchableOpacity onPress={() => router.push("/Componets/InSightScreenComponents/BMIcal")}>
       <AntDesign
         name="left"
         size={24}
         color="#fff"
         style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
       />
     </TouchableOpacity>
     <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",width:"70%"}}>BMI Report</Text>
     </View>

     <Text style={{textAlign:"center",color:"#FFF",fontSize:17,fontWeight:"600",marginTop:50}}>BMI Score</Text>

     <View>
      { 
      loading ? <ActivityIndicator color={"#D0FD3E"} size={50} /> :
     <Text style={{textAlign:"center",color:"#FFF",fontSize:130,fontWeight:"700"}}>{bmiRate}</Text>
     }

     <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
     <View style={[{width:"75%",alignItems:"center",justifyContent:"center",backgroundColor:StatusColor.Normal,borderRadius:4},bmiStatus === "Normal" || bmiStatus === "Healthy weight" ? {backgroundColor:StatusColor.Normal} : {backgroundColor:StatusColor.obessy}]}>
     <Text style={{textAlign:"center",color:"#000000",fontSize:20,fontWeight:"700",padding:10}}>{bmiStatus}</Text>
     </View>
     </View>

     </View>

     <View style={{alignItems:"center",flexDirection:"column",marginTop:20}}>
      <View>
        <Text style={{color:"#FFFFFF" , fontSize:17,borderBottomWidth:1,borderBottomColor:"#FFFFFF90",padding:10,width:140}}>Gender : <Text style={{color:"#D0FD3E"}}> Male</Text></Text>
      </View>

      <View>
        <Text style={{color:"#FFFFFF" , fontSize:17,borderBottomWidth:1,borderBottomColor:"#FFFFFF90",padding:10,width:140}}>Age : <Text style={{color:"#D0FD3E",width:"20%",textAlign:"center"}}> {age}</Text></Text>
      </View>

      <View>
        <Text style={{color:"#FFFFFF" , fontSize:17,borderBottomWidth:1,borderBottomColor:"#FFFFFF90",padding:10,width:140}}>Weight : <Text style={{color:"#D0FD3E"}}> {weight}</Text></Text>
      </View>

      <View>
        <Text style={{color:"#FFFFFF" , fontSize:17,borderBottomWidth:1,borderBottomColor:"#FFFFFF90",padding:10,width:140}}>Height : <Text style={{color:"#D0FD3E"}}> {height}</Text></Text>
      </View>

      <View>
        <Text style={{color:"#FFFFFF" , fontSize:17,borderBottomWidth:1,borderBottomColor:"#FFFFFF90",padding:10,width:140}}>Class Range : <Text style={{color:"#D0FD3E"}}> {bmiClass}</Text></Text>
      </View>

     </View>
    </View>
  )
}

export default BMIReport

const styles = StyleSheet.create({})