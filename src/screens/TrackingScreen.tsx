import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Header from '../components/header';
import events from '../utils/constants';
import { Event, RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Tracking'>;
  route: any;
}

const TrackingScreen: React.FC<Props> = ({ navigation,route }) => {
  const { name } = route.params;
  const [trackingEvents, setTrackingEvents] = useState<Event[]>([]);

  useEffect(() => {
    loadTrackingEvents();
  }, []);


  useEffect(() => {
    loadTrackingEvents();
  }, []);

  useEffect(() => {
    saveTrackingEvents();
  }, [trackingEvents]);

  const loadTrackingEvents = async () => {
    try {
      const storedEvents = await AsyncStorage.getItem(`trackingEvents_${name}`);
      if (storedEvents) {
        setTrackingEvents(JSON.parse(storedEvents));
      }
      else {
        setTrackingEvents(events);
      }
    } catch (error) {
      console.error('Error loading tracking events:', error);
    }
  };

  const saveTrackingEvents = async () => {
    try {
      await AsyncStorage.setItem(`trackingEvents_${name}`, JSON.stringify(trackingEvents));
    } catch (error) {
      console.error('Error saving tracking events:', error);
    }
  };

  const handleRemoveEvent = (eventId: number) => {
    const updatedEvents = trackingEvents.filter(event => event.id !== eventId);
    setTrackingEvents(updatedEvents);
  };

  const handleViewDetails = (event: Event) => {
    navigation.navigate('EventDetailsScreen', { event, name:name });
  };

  const renderEventItem = ({ item, drag, isActive }: { item: Event, drag: () => void, isActive: boolean }, index: number) => (
    <TouchableOpacity
      onPress={() => handleViewDetails(item)}
      style={[styles.eventItem, isActive && { backgroundColor: '#ddd' }]}
      onLongPress={drag}
    >
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventLocation}>{item.location}</Text>
        <Text style={styles.entryType}>{item.entryType === 'paid' ? 'Paid Entry' : 'Free Entry'}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveEvent(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Header title="Tracking Screen" onPressLeftButton={() => navigation.goBack()} />
          <DraggableFlatList
            data={trackingEvents}
            renderItem={({ item, drag, isActive }) => renderEventItem({ item, drag, isActive }, item.id)}
            keyExtractor={(item) => item.id.toString()}
            onDragEnd={({ data }) => {setTrackingEvents(data)}}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  entryType: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TrackingScreen;
