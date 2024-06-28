import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold' : require ('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLigt' : require ('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require ('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont){
    return <Text> Font tidak ditemukan...</Text>
  }
  return (
    <View style ={{
      flex :1,
      justifyContent :'center',
      alignItems :'center'
    }}>
      <Text style = {{ 
        fontFamily :'MetroBlack'
    }}> Font Metropolis Black</Text>
    <Text style = {{ 
        fontFamily :'Semi Bold'
    }}> Font Metropolis Semi Bold</Text>
    <Text style = {{ 
        fontFamily :'Ligth'
    }}> Font Metropolis Light</Text>
    <Text style = {{ 
        fontFamily :'Bold'
    }}> Font Metropolis Bold</Text>
    <Text> ini Text biasa</Text>

    </View>
  );
}
