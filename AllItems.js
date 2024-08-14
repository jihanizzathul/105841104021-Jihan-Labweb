import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const allProducts = [
    { id: 'product1', image: require('./assets/1.png'), name: 'Product 1', price: 19.99 },
    { id: 'product2', image: require('./assets/2.png'), name: 'Product 2', price: 29.99 },
    { id: 'product3', image: require('./assets/3.png'), name: 'Product 3', price: 24.99 },
    { id: 'product4', image: require('./assets/4.png'), name: 'Product 4', price: 34.99 },
    { id: 'product5', image: require('./assets/5.png'), name: 'Product 5', price: 39.99 },
    { id: 'product6', image: require('./assets/6.png'), name: 'Product 6', price: 44.99 },
    { id: 'product7', image: require('./assets/shoes2.png'), name: 'Product 7', price: 49.99 },
    { id: 'product8', image: require('./assets/shoes1.png'), name: 'Product 8', price: 54.99 },
    { id: 'product9', image: require('./assets/a8.jpg'), name: 'Product 9', price: 59.99 },
    { id: 'product10', image: require('./assets/a2.png'), name: 'Product 10', price: 64.99 },
];

const AllItems = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>All Products</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput 
                    style={styles.searchInput} 
                    placeholder="Search products..." 
                />
                <Image source={require('./assets/search.png')} style={styles.searchIcon} />
            </View>
            <View style={styles.productsContainer}>
                {allProducts.map((product) => (
                    <View key={product.id} style={styles.productCard}>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailProduk', product)}>
                            <Image source={product.image} style={styles.productImage} />
                        </TouchableOpacity>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.viewAllButton} onPress={() => navigation.goBack()}>
                <Text style={styles.viewAllButtonText}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    backButton: {
        padding: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        marginBottom: 20,
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
        textAlign: 'center',
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
    viewAllButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    viewAllButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AllItems;
