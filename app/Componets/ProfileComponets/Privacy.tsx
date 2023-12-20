import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'

const Privacy = () => {
    const privacy = "Workout Hunter, developed by Raskan (Contact Email: raskanr.j07@gmail.com), is committed to protecting your privacy. When you use the Workout Hunter mobile application, we collect personal information, including your name and email address, to enhance your experience. The app may also request access to fitness-related data for personalized features. We use this information to operate the app, provide personalized content, and communicate updates. Your data may be shared with trusted third-party service providers, and we prioritize the security of your information. You have the option to review, update, or delete your account information, and you can opt-out of promotional communications. This privacy policy may be updated, and any significant changes will be communicated. For questions or concerns, contact us at raskanr.j07@gmail.com."
  return (
    <View>
        <View style={{flexDirection:"row",width:"100%",alignItems:"center"}}>
     <TouchableOpacity onPress={() => router.back()}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
        />
      </TouchableOpacity>
      <Text style={{ color: '#FFF', fontSize: 20, textTransform: 'uppercase', fontWeight: '700',textAlign:"center",paddingLeft:40}}>Privacy Policy</Text>
      </View>

      <View style={{padding:10,margin:10}}>
        <Text style={{color:"#FFFfff",fontWeight:"400",fontSize:16,letterSpacing:0.5,lineHeight:20}}>{privacy}</Text>
      </View>
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({})