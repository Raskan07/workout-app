import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  const notificationScreen = [
    {
      id: '0',
      n_name: 'new',
      description:"no new notifications"
    },
    {
      id: '1',
      n_name: 'events',
      description:"no events"

    },
    {
      id: '2',
      n_name: 'all',
      description:"no notifications"

    },
  ];

  const [clickedIndex, setClickedIndex] = useState(0);

  const handleNotificationClick = (index:any) => {
    setClickedIndex(index);
  };

  return (
    <View style={{ width: '100%', height: '100%', alignItems: 'center', backgroundColor: '#1C1C1E' }}>
      <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 23, textTransform: 'uppercase', marginTop: 20, color: '#FFF' }}>Notification</Text>
      <View style={{ flexDirection: 'row', marginTop: 15, backgroundColor: '#2C2C2E', borderRadius: 15, padding: 5, width: '90%' }}>
        {notificationScreen.map((item, index) => (
          
          <TouchableOpacity
            onPress={() => handleNotificationClick(index)}
            key={index}
            style={[
              { width: '33%', borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
              clickedIndex === index ? { backgroundColor: '#D0FD3E' } : null,
            ]}
          >
            <Text
            key={index}
              style={[
                { color: '#FFF', fontWeight: '400', fontSize: 15, textTransform: 'capitalize',padding:5 },
                clickedIndex === index ? { color: '#000' } : { color: '#FFF' },
              ]}
            >
              {item.n_name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
