import { StyleSheet, Text, View } from "react-native";
import OnboardHome from "./Componets/Onboard/OnboardHome";
import HomeScreen from "./(tabs)/HomeScreen";
import { Redirect } from "expo-router";

export default function Page() {
  const isLogin = false
  return (
    // @ts-ignore
    <View style={[styles.container,{...StyleSheet.absoluteFill}]}>
      {
        isLogin ? <Redirect href={"/(tabs)/HomeScreen"} /> : <OnboardHome /> 
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#1C1C1E"
  }
});
