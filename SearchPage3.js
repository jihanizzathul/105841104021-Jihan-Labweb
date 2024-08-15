import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, PanResponder } from 'react-native';

const SearchPage3 = () => {
  const [photo, setPhoto] = useState(null);
  const [cropBox, setCropBox] = useState({ x: 50, y: 50, width: 200, height: 200 });
  const [showCamera, setShowCamera] = useState(true);

  // Fungsi untuk memilih gambar (simulasi pengambilan foto)
  const handleTakePhoto = () => {
    const placeholderImage = require('./assets/a3.png'); 
    setPhoto(placeholderImage);
    setShowCamera(false); 
  };

  // Fungsi untuk meng-crop gambar berdasarkan kotak cropping
  const handleCropPhoto = () => {
    Alert.alert('Crop Photo', `Cropping at X: ${cropBox.x}, Y: ${cropBox.y}, Width: ${cropBox.width}, Height: ${cropBox.height}`);
    // Implementasi cropping bisa dilakukan di sini.
  };

  // Fungsi untuk melakukan search dengan foto yang sudah diambil
  const handleSearch = () => {
    if (photo) {
      Alert.alert('Search', 'Searching with the selected photo...');
    } else {
      Alert.alert('Error', 'No photo selected. Please take a photo first.');
    }
  };

  // PanResponder untuk mengatur cropping box
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setCropBox({
        ...cropBox,
        width: Math.max(50, cropBox.width + gestureState.dx),
        height: Math.max(50, cropBox.height + gestureState.dy),
      });
    },
    onPanResponderRelease: () => {},
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search by Take a Photo</Text>
      <View style={styles.photoContainer}>
        {photo ? (
          <View style={styles.cropContainer}>
            <Image source={photo} style={styles.photo} />
            <View
              style={[
                styles.cropBox,
                {
                  left: cropBox.x,
                  top: cropBox.y,
                  width: cropBox.width,
                  height: cropBox.height,
                },
              ]}
              {...panResponder.panHandlers}
            />
          </View>
        ) : (
          <Text style={styles.photoPlaceholder}>No photo selected</Text>
        )}
      </View>

      {showCamera ? (
        <TouchableOpacity style={styles.cameraButton} onPress={handleTakePhoto}>
          <Image source={require('./assets/Camera_fill.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity style={styles.cropButton} onPress={handleCropPhoto}>
            <Text style={styles.cropButtonText}>Crop Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Image source={require('./assets/Search1.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  photoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  photoPlaceholder: {
    fontSize: 18,
    color: '#aaa',
  },
  cameraButton: {
    marginBottom: 20,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },
  cropContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  cropBox: {
    position: 'absolute',
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  cropButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ff9800',
    borderRadius: 5,
  },
  cropButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    marginTop: 20,
  },
  searchIcon: {
    width: 40,
    height: 40,
  },
});

export default SearchPage3;
