import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const categories = ['Shoes', 'Clothes', 'Accessories', 'T-Shirts', 'Summer'];

const latestProducts = [
    { id: 'latest1', image: require('./assets/7.png'), name: 'Latest Product 1', price: 19.99 },
    { id: 'latest2', image: require('./assets/aa.png'), name: 'Latest Product 2', price: 29.99 },
    { id: 'latest3', image: require('./assets/3.png'), name: 'Latest Product 3', price: 24.99 },
    { id: 'latest4', image: require('./assets/a8.jpg'), name: 'Latest Product 4', price: 34.99 },
    { id: 'latest5', image: require('./assets/2.png'), name: 'Latest Product 5', price: 39.99 },
];

const ShopPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTextAbove}>WELCOME TO OUR STORE</Text>
                <Text style={styles.headerTitle}>Shop</Text>
                <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Search')}>
                    <Image source={require('./assets/search.png')} style={styles.searchIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.promoSection}>
                    <Image source={require('./assets/1.png')} style={styles.promoImage} />
                    <Text style={styles.promoText}>PROMO 8.8</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={styles.categoryButton}
                            onPress={() => {
                                if (category === 'Shoes') {
                                    navigation.navigate('ShoesPage');
                                }
                            }}
                        >
                            <Text style={styles.categoryButtonText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={styles.sectionTitle}>Daftar Produk</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productsContainer}>
                    {latestProducts.map((product) => (
                        <View key={product.id} style={styles.productCard}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                        </View>
                    ))}
                </ScrollView>

                <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.navigate('AllItems')}>
                    <Text style={styles.viewAllButtonText}>View All Items</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTextAbove: {
        position: 'absolute',
        top: -20, // Mengatur posisi teks di atas judul "Shop"
        left: 16,
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchButton: {
        padding: 8,
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    promoSection: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
    },
    promoImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    promoText: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    productsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    productCard: {
        width: 150,
        marginRight: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4,
    },
    viewAllButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    viewAllButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ShopPage;
