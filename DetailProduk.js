import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Image as RNImage } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

function DetailProduk({ route }) {
  const { image, name, price, description } = route.params;
  const navigation = useNavigation();
  
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');

  
  const rating = 4; 
  const totalRatings = 20; 

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <RNImage
          key={i}
          source={i < rating ? require('./assets/Star-full.png') : require('./assets/Star.png')}
          style={styles.star}
        />
      );
    }
    return stars;
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
      <Image source={image} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.productDescription}>{description}</Text>

        <View style={styles.ratingContainer}>
          {renderStars()}
          <Text style={styles.ratingCount}>({totalRatings})</Text>
        </View>
        
        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Size:</Text>
          <Picker
            selectedValue={selectedSize}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedSize(itemValue)}
          >
            <Picker.Item label="S" value="S" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="L" value="L" />
            <Picker.Item label="XL" value="XL" />
          </Picker>
        </View>

        <View style={styles.selectorContainer}>
          <Text style={styles.selectorLabel}>Color:</Text>
          <Picker
            selectedValue={selectedColor}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedColor(itemValue)}
          >
            <Picker.Item label="Red" value="Red" />
            <Picker.Item label="Blue" value="Blue" />
            <Picker.Item label="Green" value="Green" />
            <Picker.Item label="Black" value="Black" />
            <Picker.Item label="White" value="White" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>ADD TO CARD</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    margin: 20,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  ratingCount: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10,
  },
  selectorContainer: {
    marginBottom: 20,
  },
  selectorLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#f8f8f8',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DetailProduk;
