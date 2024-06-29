import {Text, View, TextInput,TouchableOpacity,Image } from 'react-native'
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

const Login= () => {
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
        fontSize: 50,
        fontFamily: 'MetroBold',
        marginTop: 20,
        marginBottom:50,
      }}>Login</Text>

    <View style={{
        alignItems: 'center',
        width:'100%',
      }}>

      <TextInputCustom placeholder="Name" color="black" typeKeyboard="default"/>
      <TextInputCustom placeholder="Password" color="black" typeKeyboard="default" />

      <TouchableOpacity style ={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: 320,
          marginBottom:20,
          }}>

        <Text style={{
          fontFamily: 'MetroMedium',
          marginRight:5,
          fontSize:14,
          color: 'red',
          }}> Forgot Password?</Text>

        <Image source={require('./assets/arrw.png')} style={{
            width: 20,
            height:20,
          }}/>
        </TouchableOpacity> 
      
      <View style={{marginBottom:100}}>
        <ButtonCustom text="LOGIN" color="red"/>
        </View>

        <Text style={{
          fontFamily: 'MetroMedium',
          fontSize: 14,
          color : '#555',
          marginBottom: 10,
          marginTop:10,
          textAlign: 'center',
          textDecorationLine: 'underline',
          width :320,
        }}> Or login with social account</Text>

        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:30,
            width:320,
        }}>

        <TouchableOpacity style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 8,
              }}>

          <Image source={require('./assets/google.png')} style={{
              width: 40,
              height: 40,
              }}/>
          </TouchableOpacity>
                
            <TouchableOpacity style={{
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 8,
                }}>
              
            <Image source={require('./assets/fb.png')} style={{
                width: 40,
                height: 40,
              }}/>
                </TouchableOpacity>

            </View>
        </View>
      </View>
  );
}

export default Login