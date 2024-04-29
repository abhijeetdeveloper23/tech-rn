import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={event.thumbnail} style={styles.thumbnail} />
      <View style={styles.details}>
        <Text style={styles.title}>{event.name}</Text>
        <Text>{event.location}</Text>
        <Text>{event.entryType === 'paid' ? 'Paid Entry' : 'Free Entry'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default EventCard;
