import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

const Setting = () => {
  const router = useRouter()

  const data = [
    {
      id:"0",
      title:"Units of measure",
      route:"/Componets/ProfileComponets/SettingComponents/UnitsOfMeasure"
    },
    {
      id:"1",
      title:"Notifications",
      route:"/Componets/ProfileComponets/SettingComponents/Notifications"
    },
    {
      id:"2",
      title:"Language",
      route:"/Componets/ProfileComponets/SettingComponents/Language"
    },
    {
      id:"3",
      title:"Contact Us",
      route:"/Componets/ProfileComponets/SettingComponents/ContactUs"
    },


  ]

  return (
    <View style={[{backgroundColor:"#1C1C1E"},StyleSheet.absoluteFill]}>
      <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
     <TouchableOpacity onPress={() => router.push("/(tabs)/ProfileScreen")}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
        />
      </TouchableOpacity>
      <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:55}}>Setting</Text>
      </View>

      <View style={{width:"100%",alignItems:"center"}}>

      {data.map((item, index) => (
         
         <TouchableOpacity
          // @ts-ignore
           onPress={() => router.push(`${item.route}`)}
           key={item.id}
           style={{
             width: '94%',
             borderWidth: 2,
             borderTopColor: '#2C2C2E',
             marginTop: 10,
             flexDirection: 'row',
             borderRadius: 15,
             padding: 3,
             justifyContent: 'space-between',
             alignItems: 'center',
           }}>
           <Text  style={{ color: '#FFF', padding: 10, fontSize: 15, fontWeight: '600', textTransform: 'uppercase', paddingLeft: 10 }}>
             {item.title}
           </Text>
           <AntDesign  name="right" size={20} color="#ffffff90" style={{ right: 10 }} />
         </TouchableOpacity>
       ))}
       </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})