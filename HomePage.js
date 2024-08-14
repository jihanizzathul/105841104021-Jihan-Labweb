import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomePage() {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  const handleToggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter(id => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const handleProductPress = (product) => {
    navigation.navigate('DetailProduk', product);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/1.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Fashion Sale</Text>
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.newSection}>
        <Text style={styles.newSectionTitle}>New</Text>
        <Text style={styles.newSectionSubtitle}>You've never seen it before!</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/a8.jpg'),
              name: 'Stylish Jacket',
              price: '$49.99',
              description: 'This stylish jacket is perfect for all seasons. Made from high-quality materials, it offers both comfort and style. Available in various sizes.',
            })}>
              <Image source={require('./assets/a8.jpg')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>New</Text>
            <Text style={styles.productName}>Stylish Jacket</Text>
            <Text style={styles.productPrice}>$49.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('product1')}
            >
              <Image
                source={favorites.includes('product1') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/4.png'),
              name: 'Classic White T-Shirt',
              price: '$99.99',
              description: 'Elevate your everyday wardrobe with our Classic White T-Shirt. Made from 100% premium cotton, this essential piece offers a soft, breathable feel that keeps you comfortable all day long. Its versatile design features a timeless crew neckline and a flattering fit that complements any style.',
            })}>
              <Image source={require('./assets/4.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>New</Text>
            <Text style={styles.productName}>Classic White T-Shirt</Text>
            <Text style={styles.productPrice}>$99.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('product2')}
            >
              <Image
                source={favorites.includes('product2') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/5.png'),
              name: 'Elegant Pink Dress',
              price: '$149.99',
              description: 'Step into sophistication with our Elegant Pink Dress. Crafted from luxurious, soft fabric, this dress features a flattering A-line silhouette that gracefully falls to mid-calf. The gentle pink hue adds a touch of femininity, while the fitted bodice and subtly flared skirt create a timeless look thats perfect for both special occasions and everyday elegance.',
            })}>
              <Image source={require('./assets/5.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>New</Text>
            <Text style={styles.productName}>Elegant Pink Dress</Text>
            <Text style={styles.productPrice}>$149.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('product3')}
            >
              <Image
                source={favorites.includes('product3') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/6.png'),
              name: 'Charcoal Grey Maxi Dress',
              price: '$89.99',
              description: 'Embrace understated elegance with our Charcoal Grey Maxi Dress. Designed to flow effortlessly to the floor, this dress offers a chic and modern look with its full-length silhouette. Made from a soft, breathable fabric, it ensures all-day comfort while maintaining a sophisticated appearance. The versatile charcoal grey color makes it easy to style for any occasion, from casual outings to formal events. Featuring a sleek, simple design, this maxi dress can be dressed up with accessories or worn casually for a laid-back, yet polished look. Available in a range of sizes to suit your needs',
            })}>
              <Image source={require('./assets/6.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>New</Text>
            <Text style={styles.productName}>Charcoal Grey Maxi Dress</Text>
            <Text style={styles.productPrice}>$89.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('product1')}
            >
              <Image
                source={favorites.includes('product1') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          </ScrollView>
          </View>
          <View style={styles.saleSection}>
        <Text style={styles.saleSectionTitle}>Sale</Text>
        <Text style={styles.saleSectionSubtitle}>Limited time offers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/a2.png'),
              name: 'Classic Brown Skirt',
              originalPrice: '$179.99',
              salePrice: '$99.99',
              description: 'Add a touch of warmth to your wardrobe with our Classic Brown Skirt. This versatile piece is crafted from high-quality, durable fabric that provides a comfortable fit and a flattering drape. The rich brown color adds a timeless, earthy tone to your outfit, making it easy to pair with a variety of tops and accessories. Designed with a sleek, minimalist silhouette, this skirt is perfect for both casual and semi-formal occasions.',
            })}>
              <Image source={require('./assets/a2.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>Sale</Text>
            <Text style={styles.productName}>Classic Brown Skirt</Text>
            <Text style={styles.originalPrice}>$179.99</Text>
            <Text style={styles.salePrice}>$99.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('sale1')}
            >
              <Image
                source={favorites.includes('sale1') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/3.png'),
              name: 'Black & White Coordinated Set',
              originalPrice: '$212.79',
              salePrice: '$199.99',
              description: 'Discover effortless style with our Black & White Coordinated Set. This chic ensemble features a sophisticated black top paired with a complementary white skirt, creating a striking contrast that is both modern and timeless. The top boasts a sleek design with tailored details, while the skirt offers a flattering, A-line silhouette that falls gracefully to the knee.',
            })}>
              <Image source={require('./assets/3.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>Sale</Text>
            <Text style={styles.productName}>Black & White Coordinated Set</Text>
            <Text style={styles.originalPrice}>$212.79</Text>
            <Text style={styles.salePrice}>$199.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('sale2')}
            >
              <Image
                source={favorites.includes('sale2') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.productContainer}>
            <TouchableOpacity onPress={() => handleProductPress({
              image: require('./assets/a3.png'),
              name: 'Simple Pink & White Dress',
              originalPrice: '$299.99',
              salePrice: '$59.99',
              description: 'Embrace effortless elegance with our Simple Pink & White Dress. Featuring a clean and minimalist design, this dress combines a soft pink bodice with a crisp white skirt for a look thats both fresh and stylish. Made from lightweight, breathable fabric, it ensures all-day comfort while offering a flattering fit.',
            })}>
              <Image source={require('./assets/a3.png')} style={styles.productImage} />
            </TouchableOpacity>
            <Text style={styles.productLabel}>Sale</Text>
            <Text style={styles.productName}>Simple Pink & White Dress</Text>
            <Text style={styles.originalPrice}>$299.99</Text>
            <Text style={styles.salePrice}>$59.99</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.favoriteButton}
              onPress={() => handleToggleFavorite('sale2')}
            >
              <Image
                source={favorites.includes('sale2') ? require('./assets/favorite-activated.png') : require('./assets/favorite-inactive.png')}
                style={styles.favoriteIcon}
              />
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 290,
  },
  headerTextContainer: {
    position: 'absolute',
    bottom: 22,
    left: 22,
  },
  headerText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  checkButton: {
    marginTop: 11,
    backgroundColor: 'red',
    paddingVertical: 11,
    paddingHorizontal: 21,
    borderRadius: 6,
  },
  checkButtonText: {
    color: 'white',
    fontSize: 15,
  },
  newSection: {
    padding: 21,
  },
  newSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  newSectionSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
  productContainer: {
    marginRight: 11,
    marginBottom: 21,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  productImage: {
    width: 149,
    height: 149,
  },
  productLabel: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 12,
    borderRadius: 3,
    overflow: 'hidden',
  },
  productName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  buyButton: {
    marginTop: 8,
    backgroundColor: 'red',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 14,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteIcon: {
    width: 24,
    height: 24,
  },
  saleSection: {
    padding: 21,
  },
  saleSectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  saleSectionSubtitle: {
    fontSize: 15,
    color: 'gray',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  salePrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default HomePage;
