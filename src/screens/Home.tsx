import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { WelcomeScreenNavigationProp } from '../../types';

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (text: string) => {
    setName(text);
    setIsValid(text.trim().length > 0); 
  };

  const handleContinue = async () => {
    navigation.navigate('EventListScreen', {name});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Event App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name"
        value={name}
        onChangeText={handleNameChange}
      />
      <View style={isValid ? styles.buttonEnabled : styles.buttonDisabled}>
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!isValid}
        color="#ffffff" 
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonEnabled: {
    backgroundColor: '#007bff',
    width: '80%', 
    borderRadius: 5,
    overflow: 'hidden',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    width: '80%', 
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default WelcomeScreen;
