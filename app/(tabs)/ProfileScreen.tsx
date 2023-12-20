import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const router = useRouter();
  const vector ='https://static.vecteezy.com/system/resources/previews/025/851/732/original/minimalistic-round-logo-template-white-icon-of-man-head-profile-portrait-silhouette-on-black-background-modern-logotype-concept-for-business-identity-t-shirts-print-tattoo-illustration-vector.jpg';

  const data = [
    {
      id: '0',
      title: 'Edit Profile',
      route: '/Componets/ProfileComponets/EditProfile',
    },
    {
      id: '1',
      title: 'Privacy Policy',
      route: '/Componets/ProfileComponets/Privacy',
    },
    {
      id: '2',
      title: 'Setting',
      route: '/Componets/ProfileComponets/Setting',
    },
  ];

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: '#1C1C1E' }}>
      <TouchableOpacity onPress={() => router.push('/(tabs)/HomeScreen')}>
        <AntDesign
          name="left"
          size={24}
          color="#fff"
          style={{ padding: 5, margin: 15, backgroundColor: '#2C2C2E', borderRadius: 30, width: 40 }}
        />
      </TouchableOpacity>

      {/* profile pic */}
      <View style={{ flexDirection: 'row', width: '100%', padding: 10 }}>
        <View
          style={{
            width: 180,
            height: 180,
            borderRadius: 100,
            borderWidth: 7,
            borderColor: '#D0FD3E',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeftColor: '#2C2C2E', // Change this to a different color if needed
          }}>
          <TouchableOpacity
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
            <Image source={{ uri: vector }} style={{ width: 150, height: 150, borderRadius: 100, margin: 10 }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', height: 200 }}>
          <Text style={{ color: '#FFF', fontSize: 18, textTransform: 'uppercase', fontWeight: '500' }}>joined</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#2C2C2E', position: 'absolute', zIndex: 10, left: 200, top: 90, width: 3, height: 160 }}></View>

      <Text style={{ color: '#FFFFFF', marginLeft: 15, fontWeight: '800', fontSize: 50, textTransform: 'uppercase', top: -25 }}>
        Raskan
      </Text>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {data.map((item, index) => (
         
          <TouchableOpacity
           // @ts-ignore
            onPress={() => router.push(`${item.route}`)}
            key={item.id}
            style={{
              width: '94%',
              borderWidth: 2,
              borderTopColor: '#2C2C2E',
              marginTop: 5,
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
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
