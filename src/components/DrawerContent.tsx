import React from 'react';
import { View, Text, Button } from 'react-native';
import { DrawerContentProps } from '../../types';

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drawer Content</Text>
      <Button title="Close Drawer" onPress={() => navigation.closeDrawer()} />
    </View>
  );
};

export { DrawerContent };
