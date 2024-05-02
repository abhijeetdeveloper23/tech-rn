import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Header from '../components/header';
import { Event, RootStackParamList } from '../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import events from '../utils/constants';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'EventListScreen'>;
  route: any;
}

const EventListScreen: React.FC<Props> = ({ navigation, route }) => {
  const {name} = route.params;
  const [viewMode, setViewMode] = useState('list'); 

  const renderEventItem = ({ item }: { item: Event }) => (
    <TouchableOpacity onPress={() => handleEventPress({event: item})} style={styles.eventItem}>
      <Image source={item.thumbnail} style={styles.thumbnail} />
      <Text style={styles.eventName}>{item.name}</Text>
      <Text style={styles.entryType}>{item.entryType === 'paid' ? 'Paid Entry' : 'Free Entry'}</Text>
    </TouchableOpacity>
  );

  const handleEventPress = ({event}: {event: Event}) => {
    navigation.navigate('EventDetailsScreen', { event, name : name});
  };

  return (
    <SafeAreaView style={styles.main}>
      <Header title={"Event List"} onPressLeftButton={() => { navigation.goBack(); }} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setViewMode('list')} style={styles.modeButton}>
          <Text style={[styles.modeText, viewMode === 'list' && styles.activeMode]}>List View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewMode('grid')} style={styles.modeButton}>
          <Text style={[styles.modeText, viewMode === 'grid' && styles.activeMode]}>Grid View</Text>
        </TouchableOpacity>
        {viewMode === 'list' ? (
          <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
        ) : (
          <FlatGrid
            itemDimension={150}
            data={events}
            renderItem={renderEventItem}
            style={styles.gridView}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  modeButton: {
    marginBottom: 10,
  },
  modeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeMode: {
    color: 'blue',
  },
  listContainer: {
    paddingBottom: 20,
  },
  eventItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  entryType: {
    fontSize: 14,
    color: '#666',
  },
  gridView: {
    flex: 1,
  },
});

export default EventListScreen;
