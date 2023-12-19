import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import ExerciseCard from './ExerciseCard'

const ExerciseList = ({data}:any) => {
    const route =  useRouter()
  return (
    <View style={{marginTop:10,marginBottom:10}}>
      <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item,index}) => (
        <ExerciseCard data={item} router={route} index={index} />
      )}
      
      
      />
    </View>
  )
}

export default ExerciseList

const styles = StyleSheet.create({})