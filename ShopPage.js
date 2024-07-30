import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

function ShopPage() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Shop</Text>
            </View>
            <View style={styles.productSection}>
                <Text style={styles.sectionTitle}>Featured Products</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.productCard}>
                        <Image source={require('./assets/1.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Product 1</Text>
                        <Text style={styles.productPrice}>$29.99</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productCard}>
                        <Image source={require('./assets/2.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Product 2</Text>
                        <Text style={styles.productPrice}>$39.99</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productCard}>
                        <Image source={require('./assets/4.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Product 3</Text>
                        <Text style={styles.productPrice}>$49.99</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy Now</Text>
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
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        backgroundColor: '#ff6347',
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    productSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    productCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 15,
        padding: 10,
        width: 200,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    productPrice: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
    buyButton: {
        marginTop: 10,
        backgroundColor: '#ff6347',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 14,
    },
});

export default ShopPage;
