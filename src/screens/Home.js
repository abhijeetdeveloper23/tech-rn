import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
    setIsValid(text.trim().length > 0); 
  };

  const handleContinue = () => {
    // Save user's name and navigate to EventListScreen
    navigation.navigate('EventList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Event App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
      />
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!isValid}
        style={isValid ? styles.buttonEnabled : styles.buttonDisabled}
      />
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
    color: '#fff', 
    width: '80%',
  },
  buttonDisabled: {
    backgroundColor: '#ccc', 
    color: '#666',
    width: '80%',
  },
});

export default WelcomeScreen;
