import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';
import { events } from '../utils/constants';
import Header from '../components/header';

const TrackingScreen = ({ navigation }) => {
  const [trackingEvents, setTrackingEvents] = useState(events);

  const handleRemoveEvent = (eventId) => {
    const updatedEvents = trackingEvents.filter(event => event.id !== eventId);
    setTrackingEvents(updatedEvents);
  };

  const handleViewDetails = (event) => {
    navigation.navigate('EventDetails', { event });
  };

  const renderEventItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleViewDetails(item)} style={styles.eventItem}>
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
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Header title="Tracking Screen" onPressLeftButton={() => navigation.goBack()} />
      <FlatList
        data={trackingEvents}
        renderItem={renderEventItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
    </SafeAreaView>
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
