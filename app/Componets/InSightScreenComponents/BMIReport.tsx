import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { FetchData } from '../../API/BMIcal'
import { useLocalSearchParams } from 'expo-router'

const BMIReport = () => {

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
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <View>
      <Text>BMIReport</Text>
    </View>
  )
}

export default BMIReport

const styles = StyleSheet.create({})