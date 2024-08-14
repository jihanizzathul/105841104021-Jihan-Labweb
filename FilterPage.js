import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, PanResponder, Animated } from 'react-native';

const FilterPage = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const colors = ['#000000', '#FFFFFF', '#0000FF', '#FF0000', '#8B4513', '#FFC0CB', '#808080', '#008000', '#FFFF00'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Kids', 'Boys', 'Girls'];
  const brands = ['Adidas', 'Jack & Jones', 'Nike', 'Dior', 'Planet Surf', 'Uniqlo'];

  const minPrice = 0;
  const maxPrice = 300;
  const rangeWidth = 300; 

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Filter</Text>

      <Text style={styles.sectionTitle}>Price Range</Text>
      <View style={styles.priceRangeContainer}>
        <View style={styles.priceBar}>
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: minPriceAnimation,
                backgroundColor: '#000',
              },
            ]}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={[
              styles.priceIndicator,
              {
                left: maxPriceAnimation,
                backgroundColor: '#000',
              },
            ]}
            {...panResponderMax.panHandlers}
          />
          <View style={styles.priceRangeOverlay} />
        </View>
        <Text style={styles.priceRangeText}>${selectedPriceRange[0]} - ${selectedPriceRange[1]}</Text>
      </View>

      <Text style={styles.sectionTitle}>Color</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[styles.colorCircle, { backgroundColor: color, borderColor: selectedColors.includes(color) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[styles.sizeButton, { backgroundColor: selectedSizes.includes(size) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={[styles.sizeText, { color: selectedSizes.includes(size) ? '#fff' : '#000' }]}>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, { backgroundColor: selectedCategory === category ? '#000' : '#fff' }]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, { color: selectedCategory === category ? '#fff' : '#000' }]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Brand</Text>
      <View style={styles.brandContainer}>
        {brands.map(brand => (
          <TouchableOpacity
            key={brand}
            style={[styles.brandButton, { backgroundColor: selectedBrands.includes(brand) ? '#000' : '#fff' }]}
            onPress={() => toggleSelection(brand, setSelectedBrands, selectedBrands)}
          >
            <Text style={[styles.brandText, { color: selectedBrands.includes(brand) ? '#fff' : '#000' }]}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  priceRangeContainer: {
    alignItems: 'center',
  },
  priceBar: {
    height: 30,
    width: 300,
    backgroundColor: '#ddd',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
  },
  priceIndicator: {
    width: 20,
    height: 30,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    borderRadius: 5,
  },
  priceRangeOverlay: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.1,
    borderRadius: 5,
  },
  priceRangeText: {
    fontSize: 16,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
    borderWidth: 2,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sizeButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  sizeText: {
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  categoryText: {
    fontSize: 16,
  },
  brandContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  brandButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  brandText: {
    fontSize: 16,
  },
});

export default FilterPage;
