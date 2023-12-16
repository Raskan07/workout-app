import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Layout() {
    return (
    <Tabs screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
    
            if (route.name === 'HomeScreen') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'InsightScreen') {
              iconName = focused ? 'ios-barbell' : 'ios-barbell-outline';
            } else if (route.name === 'NotificationScreen') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'person' : 'person-outline';
            }
            // @ts-ignore
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        headerShown:false,
        tabBarStyle:{backgroundColor:"#1C1C1E",},
        tabBarActiveTintColor:"#FFFFFF",
        tabBarInactiveTintColor:"gray",
        tabBarShowLabel:false
        
    })}>
        <Tabs.Screen name='HomeScreen'  />
        <Tabs.Screen name='InsightScreen' />
        <Tabs.Screen name='NotificationScreen' />
        <Tabs.Screen name='ProfileScreen' />
    </Tabs>
    
    );
  }