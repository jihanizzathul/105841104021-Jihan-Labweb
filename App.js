import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './loginPage';
import SignUpPage from './signUpPage';
import ForgetPasswordPage from './forgotPasswordPage';
import ShopPage from './ShopPage';
import BagPage from './BagPage';
import FavoritePage from './FavoritPage';
import ProfilePage from './ProfilePage';
import HomeAktif from './assets/home-activated.png';
import HomeInaktif from './assets/home-inactive.png';
import ShopAktif from './assets/shop-activated.png';
import ShopInaktif from './assets/shop-inactive.png';
import BagAktif from './assets/bag-activated.png';
import BagInaktif from './assets/bag-inactive.png';
import FavoriteAktif from './assets/favorite-activated.png';
import FavoriteInaktif from './assets/favorite-inactive.png';
import ProfilAktif from './assets/profil-activated.png';
import ProfilInaktif from './assets/profil-inactive.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? HomeAktif : HomeInaktif}
                            style={{ width: 40, height: 40 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ShopAktif : ShopInaktif}
                            style={{ width: 40, height: 40 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Bag"
                component={BagPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? BagAktif : BagInaktif}
                            style={{ width: 40, height: 40 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoritePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? FavoriteAktif : FavoriteInaktif}
                            style={{ width: 40, height: 40 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfilePage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? ProfilAktif : ProfilInaktif}
                            style={{ width: 40, height: 40 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function HomePage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Go To Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="ForgetPassword" component={ForgetPasswordPage} options={{ headerShown: false }} />
                <Stack.Screen name="ShopPage" component={ShopPage} options={{ headerShown: false }} />
                <Stack.Screen name="BagPage" component={BagPage} options={{ headerShown: false }} />
                <Stack.Screen name="FavoritePage" component={FavoritePage} options={{ headerShown: false }} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;