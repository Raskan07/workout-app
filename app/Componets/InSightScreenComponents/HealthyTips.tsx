import { StyleSheet, Text, View ,Image,TouchableOpacity, Linking, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign,FontAwesome,FontAwesome5 } from '@expo/vector-icons'; 
import { fetchNutrionsData } from '../../API/NutrionsApi';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { GetFoodData } from '../../API/NutrionsApi';
import TableTitle from './TableTitle';
import NutrionsTable from './NutrionsTable';
import { ScrollView } from 'react-native-virtualized-view';


const HealthyTips = () => {
    const [data,setdata] = useState([])
    const [initialFoodTypeNumber,setInitialFoodTypeNumber] = useState(35)
    const [selectedFood,setSelectedData] = useState('SR25_1_1')
    const [foodData,setFoodData] = useState<any>([])

    console.log("food data ",foodData)
    console.log("selected Item:" ,selectedFood)

    // console.log("data from ::",data)


    const ResetFoodList = () => {
      setInitialFoodTypeNumber(2)
    }

    const NextFootlist = () => {
      setInitialFoodTypeNumber(initialFoodTypeNumber + 1)
    }

    const PreviousFoodList = () => {
      setInitialFoodTypeNumber(initialFoodTypeNumber - 1)
    }

    useEffect(() => {
      GetNutrionsData(initialFoodTypeNumber,selectedFood)
      GetFoodInfo(selectedFood)
    },[fetchNutrionsData,initialFoodTypeNumber,selectedFood])




    

    const GetNutrionsData = async (init:any,subTable:any) => {
      try {
        const GetData = await fetchNutrionsData(init,subTable)
        setdata(GetData?.data)

        
      } catch (error) {
        console.log(error)
      }
    }




    const router = useRouter()

    const colors = ['#02fa8a', '#7ffffe', '#fffccc','#fefe62','#01fab8','#02fa8a','#d7f3fe','#D0FD3E']
    const numberOfColors = colors.length

    const getRandom = (min:any,max:any) => {
      return Math.floor(Math.random() * (max - min + 1))  + min 
    }



    const randomNumber = getRandom(0,numberOfColors)


    const GetItem = (item:any) => {
      setSelectedData(item?.id)
    }

    console.log("currentState",initialFoodTypeNumber)

    const GetFoodInfo = async (food:any) => {
      try {

        const responseData = await GetFoodData(food)
        setFoodData(responseData)
        
        
      } catch (error) {
        console.log(error)
        throw(error)
      }
    }

    



  return (
   <ScrollView>
        <View style={[{backgroundColor:"#1C1C1E"},StyleSheet.absoluteFill]}>

    <View style={styles.header}>
    <AntDesign name="left" size={24} color="#fff" style={{padding:5}} onPress={ () => router.back()}  />
    </View>

    <View style={{width:"100%",alignItems:"center",padding:10}}>
      <FontAwesome5 name="apple-alt" size={130} color="#D0FD3E" />
      <Text style={{color:"#FFFFFF",fontSize:20,fontWeight:"600",letterSpacing:1,marginTop:5}}>Food & Nutritions</Text>
    </View>

  <View>
    <View style={{flexDirection:"row",width:"100%",borderRadius:15,padding:10,alignItems:"center",justifyContent:"center",gap:20}}>
      <Text style={{color:"#FFF"}}>Change Food List</Text>
      <AntDesign name="leftcircleo" size={24} color="#FFF" onPress={PreviousFoodList}/>
      <FontAwesome name="refresh" size={24} color="#FFF"  onPress={ResetFoodList}/>
      <AntDesign name="rightcircleo" size={24} color="#FFF" onPress={NextFootlist} />
    </View>
    </View>


    <Text style={{color:"#FFFFFF",fontSize:20,fontWeight:"600",letterSpacing:0.4,marginTop:15,left:10}}>Food List :</Text>

{

  data ? (
    <FlatList 
    data={data}
    // @ts-ignore
    keyExtractor={(item) => item?.id }
    renderItem={({item,index}) => (
        <TouchableOpacity
        onPress={() => GetItem(item)}
         style={{padding:10,paddingLeft:10,paddingRight:10,borderRadius:30,borderColor:colors[randomNumber],borderWidth:2,margin:10,alignItems:"center",marginTop:10}}>
          {/* @ts-ignore */}
             <Text style={{color:"#FFF",fontSize:15,textTransform:"capitalize",fontWeight:"600"}}>{item?.subDataType}</Text>
          </TouchableOpacity>
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    /> ) : (
      <View style={{padding:15,alignItems:"center",justifyContent:"center",width:"100%"}}>
              <ActivityIndicator size={"large"} color={"#D0FD3E"} />
              <Text style={{color:"#FFFFFF90"}}>Choose from FoodList</Text>
        </View>
    )
  
  }



<Text style={{color:"#FFFFFF",fontSize:20,fontWeight:"600",letterSpacing:0.4,marginTop:15,left:10}}>Nutritions Info :</Text>

<View style={{width:"100%",alignItems:"center"}}>
  {
    foodData ? 
    <NutrionsTable data={foodData} />
  : 
  <View style={{padding:15,alignItems:"center",justifyContent:"center",width:"100%"}}>
      <ActivityIndicator size={"large"} color={"#D0FD3E"} />
      <Text style={{color:"#FFFFFF90"}}>Loading ....</Text>
  </View>
  }
</View>
          

</View>
   </ScrollView>
  )
}

export default HealthyTips

const styles = StyleSheet.create({
  header:{
    width:"100%",
    padding:10,
    marginTop:5
  }
})