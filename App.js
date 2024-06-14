import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const App = () => {
  return ( 
  
    <View style={{flex: 1, justifyContent:'center',alignItems: 'center'}}> 

      <Image 
        source ={require('./logo.png')}
        style={{ width:500, height:250, marginBottom:20}}>
      </Image>

    <Text style={{
      marginBottom: 20, fontSize:30, fontWeight:'bold'
    }}>
      Welcome Bestie❤️
    </Text>


    <View style={{ flexDirection :'row'}}>
      <View style={{
          width: 200, height: 50, backgroundColor: 'red',marginRight: 100, borderRadius:50, justifyContent:'center' }}>

        <Text style={{ 
          color: 'white', fontSize:30, textAlign:'center', fontWeight:'bold'
          }}>
          Masuk
        </Text>
      </View>

    <View style={{flex: 1, justifyContent:'center',alignItems: 'center'}}> 
      <View style={{
          width: 200, height: 50, backgroundColor: 'blue', borderRadius:50, justifyContent:'center' }}>
          <Text style={{ 
          color: 'white', fontSize:30, textAlign:'center', fontWeight:'bold'
          }}>
          Daftar
          </Text>

        </View>
      </View>
    </View>
  </View>
    
  )
}

export default App

const styles = StyleSheet.create({})
