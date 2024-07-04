import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './loginPage';
import signUpPage from './signUpPage';
import forgotPasswordPage from './forgotPasswordPage';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='ke halaman login' onPress={() => navigation.navigate ('Login')} />
      <Button title='ke halaman sign up' onPress={() => navigation.navigate ('SignUp')} />
      <Button title='ke halaman Forgot Password' onPress={() => navigation.navigate ('ForgotPassword')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={loginPage} />
        <Stack.Screen name="SignUp" component={signUpPage} />
        <Stack.Screen name="ForgotPassword" component={forgotPasswordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;