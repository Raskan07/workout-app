import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker';
import CelAnimation from './Animation'


const EditProfile = () => {
  const router = useRouter()
  const vector ='https://static.vecteezy.com/system/resources/previews/025/851/732/original/minimalistic-round-logo-template-white-icon-of-man-head-profile-portrait-silhouette-on-black-background-modern-logotype-concept-for-business-identity-t-shirts-print-tattoo-illustration-vector.jpg';
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // @ts-ignore
    if(result.canceled ){
      let cameraPick = await ImagePicker.launchCameraAsync({
        quality:1.0,
        allowsEditing:true
      })
    }
    

    console.log(result);

    if (!result.canceled) {
      // @ts-ignore
      setImage(result.assets[0].uri);
    }
  };

  const [userName,setUserName] = useState('Raskan')
  const [userEmail,setUserEmail] = useState('raskanr.j07@gmail.com')

  const [isSave,setIsSave] = useState(false)


  const SaveSeesion = () => {
    setIsSave(true)
    setTimeout(() => {
      router.push("/ProfileScreen")
    }, 2000);
  }


  return (
    <View style={[{backgroundColor:"#1C1C1E",width:"100%"},StyleSheet.absoluteFill]}>
       <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
     <TouchableOpacity onPress={() => router.push("/(tabs)/ProfileScreen")}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
        />
      </TouchableOpacity>
      <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:40}}>Edit  Profile</Text>
      </View>

      <View style={{ flexDirection: 'row', width: '100%', padding: 10 ,alignItems:"center",justifyContent:"center"}}>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 100,
            borderWidth: 7,
            borderColor: '#D0FD3E',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftColor: '#2C2C2E', 
          }}>
          <TouchableOpacity
          onPress={() => pickImage() }
            style={{
              width: 180,
              height: 180,
              borderRadius: 100,
              borderWidth: 5,
              borderColor: '#2C2C2E',
              alignItems: 'center',
              justifyContent: 'center',
              borderLeftColor: '#FFFFFF',
            }}>
              {
                image ? 
                <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100, margin: 10 }} />
                : <Image source={{ uri: vector }} style={{ width: 150, height: 150, borderRadius: 100, margin: 10 }} />
              }
            <Ionicons name="md-camera-outline" size={35} color="#FFF" style={{position:"absolute",zIndex:10,top:120,right:20}} />
          </TouchableOpacity>
        </View>


    </View>

    <View style={{width:"100%",padding:10,marginTop:25,alignItems:"center"}}>
      <Text style={{color:"#D0FD3E",left:-120,padding:5}}>Name</Text>
      <TextInput
      style={{width:"95%",padding:5,borderWidth:1,borderColor:"#2c2c2e",borderRadius:30,color:"#FFF",fontSize:20,fontWeight:"700",textAlign:"center"}}
      value={userName}
      onChangeText={setUserName}
      placeholder='UserName'
      />

    </View>

    <View style={{width:"100%",padding:10,alignItems:"center",marginTop:-15}}>
      <Text style={{color:"#D0FD3E",left:-110,padding:5}}>User name</Text>
      <TextInput
      style={{width:"95%",padding:5,borderWidth:1,borderColor:"#2c2c2e",borderRadius:30,color:"#FFF",fontSize:18,fontWeight:"200",textAlign:"center"}}
      value={userEmail}
      onChangeText={setUserEmail}
      placeholder='Email Address'
      />

    </View>


    <TouchableOpacity 
    onPress={() => SaveSeesion()}
    style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
      <View style={{width:"90%",alignItems:"center",justifyContent:"center",marginTop:150,backgroundColor:"#D0FD3E",padding:10,borderRadius:30}}>
        <Text style={{fontSize:18,fontWeight:"700",color:"#000000",letterSpacing:1}}>Save</Text>
      </View>
    </TouchableOpacity>

    {isSave ? <CelAnimation /> : null}

    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({})