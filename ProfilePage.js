import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const [fontsLoaded] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            style={styles.searchIcon}
            source={require('./assets/search.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image
          style={styles.profileImage}
          source={require('./assets/profile.jpg')}
        />
        <View style={styles.profileText}>
          <Text style={[styles.profileName, { fontFamily: 'MetroSemiBold' }]}>Jihan Izzathul Mujidah</Text>
          <Text style={[styles.profileEmail, { fontFamily: 'MetroLight' }]}>Jihanizzathul29@gmail.com</Text>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>My Orders</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>Already have 12 orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>Shipping Addresses</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>3 addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>Payment Methods</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>Visa ***34</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>Promo Codes</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>You have special promo codes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>My Reviews</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>Reviews for 4 items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuTitle, { fontFamily: 'MetroMedium' }]}>Settings</Text>
          <Text style={[styles.menuSubtitle, { fontFamily: 'MetroLight' }]}>Notifications, Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'MetroBold',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
  },
  profileEmail: {
    fontSize: 14,
    marginTop: 5,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    marginBottom: 15,
  },
  menuTitle: {
    fontSize: 16,
  },
  menuSubtitle: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default ProfilePage;
