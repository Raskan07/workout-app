import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'; 
import { fetchData } from '../../API/ExcersieDbAPI';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-virtualized-view';
import ExerciseCard from './ExerciseCard';
import ExerciseList from './ExerciseList';

const Exercise = () => {
    const data = useLocalSearchParams();

    const [exceriseData, setExceriseData] = useState([])
    

    useEffect(() => {
        if (data) {
            getExercise(data.workout_name);
        }
    }, [data]);

    const getExercise = async (bodyPart: any) => {
        try {
            let data = await fetchData(bodyPart);
            setExceriseData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Stack screenOptions={{
                    presentation: "fullScreenModal"
                }} />

                <ImageBackground
                    source={{ uri: "https://thebarbell.com/wp-content/uploads/2023/04/back-workout.jpg" }}
                    style={{ width: "100%", height: 300 }}
                >
                    <TouchableOpacity>
                        <AntDesign
                            onPress={() => router.back()}
                            name="left"
                            size={24}
                            color="#FFF"
                            style={{ padding: 7, borderRadius: 30, elevation: 3, width: 45, margin: 12, backgroundColor: "#2C2C2E95", alignItems: "center", justifyContent: "center" }} />
                    </TouchableOpacity>

                    <LinearGradient colors={['transparent', '#000000']} style={{ position: "absolute", zIndex: 10, bottom: 0, width: "100%", borderRadius: 30 }}>
                        <Text style={{ paddingLeft: 10, color: "#FFF", fontSize: 18, fontWeight: "700", textTransform: "capitalize" }}>{data?.workout_name} workout</Text>
                        <Text style={{ paddingLeft: 10, color: "#D0FD3E", fontSize: 15, fontWeight: "500", textTransform: "capitalize", letterSpacing: 2 }}>| {data?.workout_count} workouts</Text>
                    </LinearGradient>

                </ImageBackground>

                <ExerciseList  data={exceriseData}/>

            </View>
        </ScrollView>
    );
}

export default Exercise;

const styles = StyleSheet.create({});
