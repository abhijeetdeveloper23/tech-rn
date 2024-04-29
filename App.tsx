
import React from 'react';
import StackNavigator from './src/components/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();
  return (
    <>
      <StackNavigator />
    </>
  );
}


export default App;
