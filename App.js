import {Text, View, TextInput,TouchableOpacity } from 'react-native'
import React from 'react';
import { useFonts } from 'expo-font';

const ButtonCustom=({ text, color}) => {
  return (
    <TouchableOpacity>
      <View style ={{
        width: 320,
        height: 50,
        backgroundColor: color,
        borderRadius: 50,
        marginBottom:40,
        justifyContent: 'center',
        alignItems:'center',
        }}>
        
      <Text style ={{
        textAlign:'center',
        color: 'white',
        fontSize: 18,
        fontWeight:'bold'
        }}>
        {text}
        </Text>
      </View>
        </TouchableOpacity>
    );
}

const TextInputCustom = ({ placeholder, color, typeKeyboard })=> {
  return(
    <TextInput
      keyboardType={typeKeyboard}
      placeholder={placeholder}
      style={{
        width: 320,
        height: 40,
        borderColor: color,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingLeft: 10,
      }}/>
    );
}

const ForgotPassword= () => {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold' : require ('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight' : require ('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require ('./assets/fonts/Metropolis-SemiBold.otf'),
    'MetroMedium' : require ('./assets/fonts/Metropolis-Medium.otf'),
  });

  if (!dapatFont){
    return <Text> Font tidak ditemukan...</Text>
  }

  return (
    <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems : 'flex-start',
        backgroundColor: '#fff',
        padding: 16,
    }}>

    <Text style={{
        fontSize: 40,
        fontFamily: 'MetroBold',
        marginTop: 20,
        marginBottom:80,
      }}>Forgot Password</Text>

      <View style={{
        alignItems: 'center',
        width: '100%'
      }}>

    <Text style={{
          fontFamily: 'MetroMedium',
          marginRight:5,
          fontSize:12,
          textAlign : 'center',
          }}> Please, enter your email addres. You will receive a link to create a new password via email</Text>
      <View style={{marginBottom:50}}>
      <TextInputCustom placeholder="enter your email" color="black" typeKeyboard="email-address"/>
      </View>

        <ButtonCustom text="Confirm mail" color="red"/>
      </View>
    </View>
    
  );
}
export default ForgotPassword