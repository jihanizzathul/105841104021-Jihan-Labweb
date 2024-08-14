import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const shoesProducts = [
  { id: 'shoe1', image: require('./assets/shoes1.png'), name: 'Trendy Sneakers', price: 59.99 },
  { id: 'shoe2', image: require('./assets/shoes2.png'), name: 'Casual Sneakers', price: 49.99 },
  { id: 'shoe3', image: require('./assets/shoes3.png'), name: 'Classic', price: 79.99 },
  { id: 'shoe4', image: require('./assets/shoes4.png'), name: 'Cool High-Top Sneakers', price: 89.99 },
  { id: 'shoe5', image: require('./assets/shoes6.png'), name: 'Sporty Running Shoes', price: 39.99 },
];

const ShoesPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shoes Collection</Text>
            
            <ScrollView style={styles.productsContainer}>
                <View style={styles.gridContainer}>
                    {shoesProducts.map((product) => (
                        <View key={product.id} style={styles.productCard}>
                            <Image source={product.image} style={styles.productImage} />
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                            <TouchableOpacity
                                style={styles.detailsButton}
                                onPress={() => {
                                
                                }}
                            >
                                <Text style={styles.detailsButtonText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Back to Shop</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        padding: 16,
    },
    productsContainer: {
        flex: 1,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%', 
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
    },
    productImage: {
        width: 100, 
        height: 100, 
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
    detailsButton: {
        marginTop: 10,
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    detailsButtonText: {
        color: 'white',
        fontSize: 16,
    },
    backButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ShoesPage;
