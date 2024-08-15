// SortByPage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SortByPage = ({ navigation }) => {
    const sortOptions = [
        { label: 'Populer', value: 'populer' },
        { label: 'New', value: 'new' },
        { label: 'Sale', value: 'sale' },
        { label: 'Price High to Low', value: 'highToLow' },
        { label: 'Price Low to High', value: 'lowToHigh' },
    ];

    const handleSortOptionPress = (sortOption) => {
        // Kirim data pengurutan kembali ke ShopPage
        navigation.navigate('ShopPage', { sortOption });
    };

    return (
        <View style={styles.container}>
            {sortOptions.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={styles.sortOptionButton}
                    onPress={() => handleSortOptionPress(option.value)}
                >
                    <Text style={styles.sortOptionText}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    sortOptionButton: {
        paddingVertical: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sortOptionText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SortByPage;
