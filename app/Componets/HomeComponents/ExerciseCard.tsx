import { StyleSheet, Text, View,TouchableOpacity, ActivityIndicator} from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import Animated ,{ FadeIn, FadeInLeft, FadeOut } from 'react-native-reanimated';


const ExerciseCard = ({data,router,index}:any) => {
    if(!data){
        return (
        <View style={{ flex:1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator color={"#D0FD3E"} />
        </View>
        )
    }

  return (
    <Animated.View entering={FadeInLeft.delay(100).springify()}  exiting={FadeOut}>
    <TouchableOpacity 
    onPress={() => router.push({pathname:"/Componets/HomeComponents/OnExcersieDetails",params:data,index})}
    style={{width:"98%",marginTop:5,padding:5,borderRadius:15,flexDirection:"row",backgroundColor:"#505050"}}>
        {data?.gifUrl ? (
        <Image
          source={{ uri: data?.gifUrl }}
          style={{ width: 100, height: 100, borderRadius: 15 }}
        />
      ) : (
        <View style={{ width: 100, height: 100, borderRadius: 15, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator color={"#D0FD3E"} />
        </View>
      )}

        <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 16, textTransform: "capitalize" }}>
            {data?.name?.length > 25 ? data?.name.slice(0, 25) + '...' : data?.name}
        </Text>
        <Text style={{ color: "#D0FD3E90", fontSize: 15, fontWeight: "500", textTransform: "capitalize" }}>Target:
        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textTransform: "capitalize" }}>  {data?.target}</Text>
        </Text>
        </View>

      
    </TouchableOpacity>
    </Animated.View>
  )
}

export default ExerciseCard

const styles = StyleSheet.create({})