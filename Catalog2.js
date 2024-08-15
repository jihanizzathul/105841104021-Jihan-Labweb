import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';


const WomenTops = () => {
  const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops'];
  const [products, setProducts] = useState([
    {
      name: 'Casual T-shirt',
      image: require('./assets/a2.png'),
      color: 'Brown',
      size: 'M',
      originalPrice: 30, 
      price: 25,
      rating: 4,
      ratingCount: 12, 
      loved: false,
      sale: true,
    },
    {
      name: 'Summer Blouse',
      image: require('./assets/a3.png'),
      color: 'Pink',
      size: 'L',
      price: 52,
      rating: 5,
      ratingCount: 18, 
      loved: false,
      sale: false,
    },
    {
      name: 'T-shirt',
      image: require('./assets/a4.png'),
      color: 'Black',
      size: 'L',
      originalPrice: 100, 
      price: 80,
      rating: 5,
      ratingCount: 42,
      loved: false,
      sale: true,
    },
    {
      name: 'Party Dress',
      image: require('./assets/a5.png'),
      color: 'Green',
      size: 'L',
      price: 21,
      rating: 3,
      ratingCount: 28, 
      loved: false,
      sale: false,
    },
  ]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? require('./assets/Star-full.png') : require('./assets/Star.png')}
          style={styles.starIcon}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={styles.ratingText}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].loved = !newProducts[index].loved;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.sale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.color}</Text>
        <Text style={styles.productSize}>Size: {item.size}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.sale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            <Text style={styles.salePrice}>${item.price}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>${item.price}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <Image
          source={item.loved ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
          style={styles.loveIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Women Tops</Text>
        <Image source={require('./assets/search.png')} style={styles.searchIcon} />
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
          <Text style={styles.filterText}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  categoryButton: {
    backgroundColor: 'black',
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
  },
  categoryText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  filterText: {
    fontSize: 16,
  },
  productList: {
    marginTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  saleBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    paddingVertical: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 16,
    color: '#777',
  },
  productSize: {
    fontSize: 16,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 16,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  salePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loveButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  loveIcon: {
    width: 30,
    height: 30,
  },
});

export default WomenTops;
