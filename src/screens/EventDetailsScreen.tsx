import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Header from '../components/header';
import { EventDetailsScreenNavigationProp, RootStackParamList } from '../../types';
import { loadTrackingList, saveTrackingList } from '../utils/trackingStorage';

interface Props {
  navigation: EventDetailsScreenNavigationProp;
  route: any;
}

const EventDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { event, name } = route.params;

  const handleTrackButtonPress = async () => {
    try {
      const currentTrackingList = await loadTrackingList();
      const updatedTrackingList = currentTrackingList ? [...currentTrackingList, event] : [event];
      await saveTrackingList(updatedTrackingList);
      navigation.navigate('Tracking', { name : name });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Event Detail" onPressLeftButton={() => navigation.goBack()} />
      <View style={styles.content}>
        <Image source={event.thumbnail} style={styles.thumbnail} />
        <Text style={styles.title}>{event.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>Location: {event.location}</Text>
          <Text style={styles.detailText}>Entry: {event.entryType}</Text>
        </View>
        <TouchableOpacity onPress={handleTrackButtonPress} style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Event</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  detailsContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 5,
  },
  trackButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  trackButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default EventDetailsScreen;
