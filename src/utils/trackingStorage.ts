import AsyncStorage from '@react-native-async-storage/async-storage';
import { Event } from '../../types';

export const saveTrackingList = async (trackingList: Event[]) => {
  try {
    await AsyncStorage.setItem('trackingList', JSON.stringify(trackingList));
  } catch (error) {
    console.error('Error saving tracking list:', error);
  }
};

export const loadTrackingList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('trackingList');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error loading tracking list:', error);
    return null;
  }
};
