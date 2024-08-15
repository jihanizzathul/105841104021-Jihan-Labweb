import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SearchPage2 = () => {
  return (
    <ImageBackground 
      source={require('./assets/1.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Take a Photo pressed')}>
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Upload an Image pressed')}>
          <Text style={styles.buttonText}>Upload an Image</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SearchPage2;
