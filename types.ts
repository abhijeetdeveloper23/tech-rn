import { StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type RootStackParamList = {
  Welcome: undefined;
  EventListScreen: {name: string};
  EventDetailsScreen: { event: Event; name: string };
  Tracking: {name:string};
};

export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
export type EventListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EventListScreen'>;
export type EventDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EventDetailsScreen'>;
export type TrackingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tracking'>;

export interface Event {
    id: number;
    name: string;
    location: string;
    thumbnail: ImageSourcePropType;
    entryType: 'paid' | 'free';
  }

  export interface Props {
    event: Event;
    onPress: () => void;
  }

  export interface DrawerContentProps {
    navigation: DrawerNavigationProp<any, any>;
  }

  export interface HeaderProps {
    title: string;
    onPressLeftButton: () => void;
    containerStyle?: StyleProp<ViewStyle>; 
  }

 export interface BackIconProps {
}